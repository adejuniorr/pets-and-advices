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
    color: var(--gray06);
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
      color: var(--dark-pink);

      &.disabled {
        color: var(--black);
      }
    }

    &:has(.error) {
      .floating_label {
        color: var(--danger-red);
      }
    }
  }

  input:not(:focus) {
    &::placeholder {
      color: var(--white);
    }
  }

  .input_container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    padding-bottom: 12px;
    border-radius: 32px;
    border: 2px solid var(--dark-pink);
    background-color: var(--white);
    box-shadow: 0 4px 0 var(--dark-pink);

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
      border-color: var(--danger-red);

      svg {
        color: var(--danger-red);
      }
    }
  }

  .input_error_msg {
    padding-top: 4px;
    padding-left: 16px;
    height: 20px;
    color: var(--danger-red);
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`;
