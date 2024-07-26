import styled from "styled-components";

export const InputField = styled.div`
  width: auto;

  .floating_label {
    display: flex;
    align-items: center;
    position: relative;
    top: 32px;
    left: 20px;
    font-size: 18px;
    color: #555;
    pointer-events: none;
    transition: 0.2s ease all;
    height: 16px;
    z-index: 1;
    white-space: nowrap;
  }

  &:has(input:not(:placeholder-shown)),
  &:has(input:focus) {
    .floating_label {
      top: 18px;
      font-size: 14px;
      color: #3e2029;

      &.disabled {
        color: #222;
      }
    }

    &:has(.error) {
      .floating_label {
        color: red;
      }
    }
  }

  input:not(:focus) {
    &::placeholder {
      color: #fff;
    }
  }

  .input_container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    padding-bottom: 12px;
    border-radius: 32px;
    border: 2px solid #3e2029;
    background-color: #f1f1f1;
    box-shadow: 0 4px 0 #3e2029;

    input {
      font-size: 18px;
      width: 90%;
      outline: none;
      background: none;
    }

    svg {
      width: 18px;
      color: var(--blue);
    }

    &.error {
      border-color: red;

      svg {
        color: red;
      }
    }
  }

  .input_error_msg {
    padding-top: 4px;
    padding-left: 16px;
    height: 20px;
    color: red;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`;
