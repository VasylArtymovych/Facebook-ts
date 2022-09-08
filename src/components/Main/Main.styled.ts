import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled, { css } from "styled-components";

interface IProps {
  layout: boolean;
}

export const CardsPostsWraper = styled("div")<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
    ${({ layout }) => {
      return layout
        ? css`
            gap: 10px;
          `
        : css`
            gap: 20px;
          `;
    }}
  }
  @media (min-width: 1200px) {
    gap: 20px;
  }
  @media (min-width: 1500px) {
    gap: 30px;
  }
`;

export const CardsContainer = styled("div")<IProps>`
  display: grid;
  justify-content: center;
  grid-gap: 10px;
  ${({ layout }) => {
    return layout
      ? css`
          grid-template-columns: 120px;
        `
      : css`
          grid-template-columns: 1fr;
        `;
  }}
  @media (min-width: 768px) {
    ${({ layout }) => {
      return layout
        ? css`
            grid-template-columns: 135px 135px;
            grid-gap: 10px;
          `
        : css`
            grid-template-columns: 220px 220px;
            grid-gap: 20px;
          `;
    }}
  }
  @media (min-width: 1200px) {
    grid-gap: 20px;
    ${({ layout }) => {
      return layout
        ? css`
            grid-template-columns: 200px 200px;
          `
        : css`
            grid-template-columns: 320px 320px;
          `;
    }}
  }
  @media (min-width: 1500px) {
    grid-gap: 30px;
    ${({ layout }) => {
      return layout
        ? css`
            grid-template-columns: 270px 270px;
          `
        : css`
            grid-template-columns: 420px 420px;
          `;
    }}
  }
`;

export const BtnsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  @media (min-width: 768px) {
    margin-top: 53px;
  }
`;

interface IBtnProps {
  onClick: (e: Event) => void;
}

export const StyledButton = styled("div")<IBtnProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(30 / 24);
  }
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 32px;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
export const ForwardIcon = styled(IoIosArrowForward)`
  font-size: 32px;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
