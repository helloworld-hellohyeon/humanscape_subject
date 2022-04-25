import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { debounce } from "lodash";
import styled from "@emotion/styled";
import { ReducerType } from "redux/rootReducer";
import {
  Disease,
  startSearching,
  endSearching,
  storeDiseaseResult,
} from "redux/Slices/disease";
import { Title } from "./layout";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const BORDER_RADIUS = 42;
const RESULT_MAX_COUNT = 7;

const Self = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth}px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.sizes.searchInput}px;
  padding: 20px 24px;
  font-size: 1.125rem;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  background-color: #fff;
`;

const InputSelf = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 12px;
  font: inherit;
  line-height: 1.15;
  border: 0;
  outline: 0;

  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &:-mos-input-placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

const SearchButton = styled.button`
  cursor: pointer;
  height: 100%;
  padding: 18px 32px;
  font: inherit;
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: #fff;
  border: 0;
  border-top-right-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  background-color: ${(props) => props.theme.colors.blue3};
`;

const RecommendsSelf = styled.ul`
  position: absolute;
  top: ${(props) => props.theme.sizes.searchInput}px;
  left: 0;
  width: 100%;
  margin-top: 8px;
  padding: 24px 24px 16px;
  border-radius: 20px;
  background-color: #fff;
`;

const Recommend = styled.li`
  width: 100%;

  &:before {
    content: SearchIcon;
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: #000;
`;

const ListComment = styled.div`
  font-size: 13px;
  color: #6a737b;
`;

const RecommendText = styled.div`
  flex: 1;
  margin-left: 12px;
  padding: 8px 0;
`;

const Input = () => {
  const { watch, register } = useFormContext();
  const dispatch = useDispatch();
  const diseaseValue = watch("disease");

  const searchDisease = useCallback(
    debounce(async (keyword: string) => {
      if (keyword) {
        const result = await fetch("/data.json")
          .then((res) => res.json())
          .then((res) => {
            console.log(`API CALLED_${keyword}`);

            const filtered = res.filter((r: Disease) =>
              r.name.includes(keyword.trim())
            );
            return filtered.slice(0, RESULT_MAX_COUNT - 1);
          });

        dispatch(storeDiseaseResult(result));
      } else {
        dispatch(storeDiseaseResult([]));
      }

      dispatch(endSearching());
    }, 400),
    [dispatch, storeDiseaseResult, endSearching]
  );

  useEffect(() => {
    dispatch(startSearching());
    searchDisease(diseaseValue);
  }, [dispatch, searchDisease, diseaseValue]);

  return (
    <>
      <InputBox>
        <SearchIcon />
        <InputSelf
          {...register("disease")}
          placeholder="질환명을 입력해 주세요."
        />
      </InputBox>
      <SearchButton>검색</SearchButton>
    </>
  );
};

const Recommends = () => {
  const { diseases: searchResult, loading } = useSelector(
    (state: ReducerType) => state.diseases
  );
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (loading) {
      setComment("검색 중...");
    } else if (!loading && searchResult.length > 0) {
      setComment("추천 검색어");
    } else {
      setComment("");
    }
  }, [searchResult, loading, setComment]);

  return (
    <RecommendsSelf>
      {comment && <ListComment>{comment}</ListComment>}
      {searchResult.map((s) => (
        <Recommend key={s.id}>
          <A href="#">
            <SearchIcon />
            <RecommendText>{s.name}</RecommendText>
          </A>
        </Recommend>
      ))}
    </RecommendsSelf>
  );
};

const Search = () => {
  const methods = useForm();
  const diseaseValue = methods.watch("disease");

  return (
    <FormProvider {...methods}>
      <Self>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <Form>
          <Input />
          {diseaseValue && <Recommends />}
        </Form>
      </Self>
    </FormProvider>
  );
};

export default memo(Search);
