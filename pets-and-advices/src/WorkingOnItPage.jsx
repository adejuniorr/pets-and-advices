import styled from "styled-components";
import SVG from "/svg/working-on-it.svg";
import { PrimaryButton } from "./components/buttons/PrimaryButton";
import { FaLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  height: 100vh;
  overflow: hidden;

  h1 {
    font-size: 32px;
    max-width: 100%;
    text-align: center;
  }

  p {
    font-size: 20px;
    max-width: 500px;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 450px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const WorkingOnItPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Página não encontrada</h1>
      <br />
      <p>Algum erro inesperado ocorreu. Estamos trabalhando nisso...</p>
      <img src={SVG} alt="" />
      <PrimaryButton
        onClick={() => {
          navigate("/");
        }}
      >
        <FaLeftLong />
        Voltar
      </PrimaryButton>
    </Container>
  );
};
