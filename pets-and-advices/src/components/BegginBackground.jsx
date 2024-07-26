import styled from "styled-components";

export const BegginBackground = styled.div`
  background-color: #fcffd7;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;

  #login-mobile-logo {
    display: none;
  }

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 40px;
    padding: 0;

    #login-mobile-logo {
      display: block;
      width: 200px;
    }
  }
`;
