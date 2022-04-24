import styled from "@emotion/styled";
import { ReactNode, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

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

export const Recommends = styled.ul`
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

export const Input = () => {

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
