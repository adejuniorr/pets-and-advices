import styled from "styled-components";

export const PrimaryButton = styled.button`
  position: relative;
  box-shadow: 0 0 4px #888;
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : "#ececec")};
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-family: "Sansita";
  color: ${(props) => (props.$fcolor ? props.$fcolor : "#000")};
  width: ${(props) => (props.$width ? props.$width : "auto")};
  transition: all 0.1s;
  overflow: hidden;
  cursor: pointer;

  /* &:hover {
    background-color: #e2e2e2;
  } */

  &::before {
    background: rgba(0, 0, 0, 0.05);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    border-radius: 36px;
    transition: all 0.3s ease;
  }

  &::before {
    width: 0%;
    height: 5%;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &:active::before {
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    box-shadow: inset 0 2px 5px #666666;
  }
`;
