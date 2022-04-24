import { ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReducerType } from "redux/rootReducer";
import { storeDiseaseResult } from "redux/Slices/users";

const BORDER_RADIUS = 42;

// TODO: line-height 정리
// TODO: input, button height 안맞음

const InputWrapper = styled.form`
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
  padding: 20px 24px;
  font-size: 1.125rem;
  line-height: 1.6;
  letter-spacing: -0.018em;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  background-color: #fff;
`;

const InputSelf = styled.input`
  width: 100%;
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
  padding: 24px 24px 16px;
  border-radius: 20px;
  background-color: #fff;
`;

const RecommendWrapper = styled.li`
  display: flex;
  align-items: center;
  width: 100%;

  &:before {
    content: SearchIcon;
  }
`;

const ListComment = styled.div`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: 13px;
  letter-spacing: -0.018em;
  line-height: 1.6;
  color: #6a737b;
`;

const RecommendSelf = styled.div`
  flex: 1;
  margin-left: 12px;
  padding: 8px 0;
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: 1rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

export const Recommend = ({ children }: { children: ReactNode }) => {
  return (
    <RecommendWrapper>
      <SearchIcon />
      <RecommendSelf>{children}</RecommendSelf>
    </RecommendWrapper>
  );
};

export const Recommends = () => {
  return (
    <RecommendsSelf>
      <ListComment>추천 검색어</ListComment>
      <Recommend>암</Recommend>
    </RecommendsSelf>
  );
};

export const Input = () => {
  const { register, watch } = useForm();
  const searchResults = useSelector((state: ReducerType) => state.diseases);
  const dispatch = useDispatch();
  const diseaseValue = watch("disease");

  const searchDisease = useCallback(async (keyword: string) => {
    const result = await fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        const filtered = res.filter((r: { name: string; id: number }) =>
          r.name.includes(keyword)
        );
        return filtered;
      });
    dispatch(storeDiseaseResult(result));
  }, []);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    const trimemdDisease = diseaseValue ? diseaseValue.trim() : diseaseValue;
    if (trimemdDisease) {
      searchDisease(trimemdDisease);
    }
  }, [diseaseValue]);

  return (
    <InputWrapper>
      <InputBox>
        <SearchIcon />
        <InputSelf
          {...register("disease")}
          placeholder="질환명을 입력해 주세요."
        />
      </InputBox>
      <SearchButton>검색</SearchButton>
    </InputWrapper>
  );
};
