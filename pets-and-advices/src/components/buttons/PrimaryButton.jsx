import styled from "styled-components";

export const PrimaryButton = styled.button`
  position: relative;
  box-shadow: 0 0 4px var(--gray04);
  background-color: ${(props) =>
    props.$bgcolor ? props.$bgcolor : "var(--gray01)"};
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-family: "Sansita";
  color: ${(props) => (props.$fcolor ? props.$fcolor : "var(--black)")};
  width: ${(props) => (props.$width ? props.$width : "auto")};
  transition: all 0.1s;
  overflow: hidden;
  cursor: pointer;

  &::before {
    background: rgba(0, 0, 0, 0.05);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
    z-index: 0;
    border-radius: 36px;
    transition: all 0.3s ease;
  }

  &::before {
    width: 0%;
    height: 100%;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &:active::before {
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    box-shadow: inset 0 2px 5px var(--gray06);
  }
`;
