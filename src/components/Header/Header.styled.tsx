import styled from "styled-components";

export const StyledHeader = styled("div")`
  display: flex;
  padding: 5px 20px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 99;
  justify-content: space-between;
  box-shadow: 0px 0px 3px #ccc;
`;

export const HeaderLeft = styled("div")`
  display: flex;
  align-items: center;

  & img {
    height: 40px;
  }
`;

export const HeaderSearch = styled("div")`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 0px 10px;
  height: 40px;
  margin-left: 20px;

  & input {
    min-width: 200px;
    border: 0;
    outline: 0;
    background-color: transparent;
    padding: 0;
  }
`;

export const HeaderMiddle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// interface IOptionProps {
//   active: Boolean;
// }
export const HeaderOptions = styled("div")<{ active?: Boolean }>`
  padding: 5px 40px;
  cursor: pointer;
  ${(p) => p.active && "position: relative;"};
  ${(p) =>
    p.active &&
    ":after {content: ''; position: absolute; height: 3px; left: 0; right: 0; bottom: -5px; background-color:#2381fa; }"};

  &:hover {
    border-radius: 20px;
    background-color: whitesmoke;
  }

  & svg {
    color: ${(p) => (p.active ? " #2381fa " : "grey")};
  }
  & svg:hover {
    color: #2381fa;
  }
`;

export const HeaderRight = styled("div")`
  display: flex;
  align-items: center;

  & button.MuiButtonBase-root {
    width: 40px;
    height: 40px;
    margin: 0px 5px;
    background-color: whitesmoke;
    color: #000;
  }
`;

export const HeaderInfo = styled("div")`
  display: flex;
  align-items: center;

  & h5 {
    margin-right: 20px;
  }

  & div {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;
