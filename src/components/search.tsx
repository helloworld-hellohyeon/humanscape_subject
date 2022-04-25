import { memo, ReactNode, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import styled from "@emotion/styled";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReducerType } from "redux/rootReducer";
import { startSearching, storeDiseaseResult } from "redux/Slices/disease";
import { Title } from "./layout";

const BORDER_RADIUS = 42;

// TODO: line-height 정리
// TODO: input, button height 안맞음

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
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: 1rem;
  line-height: 1.6;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.sizes.searchInput}px;
  padding: 20px 24px;
  font-size: 1.125rem;
  line-height: 1.6;
  letter-spacing: ${(props) => props.theme.font.spacing}em;
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
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: 13px;
  letter-spacing: ${(props) => props.theme.font.spacing}em;
  line-height: 1.6;
  color: #6a737b;
`;

const RecommendText = styled.div`
  flex: 1;
  margin-left: 12px;
  padding: 8px 0;
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: 1rem;
  letter-spacing: ${(props) => props.theme.font.spacing}em;
  line-height: 1.6;
`;

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
  }, [searchResult, loading]);

  return (
    <RecommendsSelf>
      {comment && <ListComment>{comment}</ListComment>}
      {searchResult.slice(0, 6).map((s) => (
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

const Input = () => {
  const { watch, register } = useFormContext();
  const dispatch = useDispatch();
  const diseaseValue = watch("disease");

  const searchDisease = useCallback(
    async (keyword: string) => {
      dispatch(startSearching());

      if (keyword) {
        const result = await fetch("/data.json")
          .then((res) => res.json())
          .then((res) => {
            const filtered = res.filter((r: { name: string; id: number }) =>
              r.name.includes(keyword)
            );
            return filtered;
          });

        dispatch(storeDiseaseResult(result));
      } else {
        dispatch(storeDiseaseResult([]));
      }
    },
    [dispatch, storeDiseaseResult, startSearching]
  );

  useEffect(() => {
    searchDisease(diseaseValue);
  }, [diseaseValue]);

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
