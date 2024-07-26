import styled from "styled-components";

import profilePicture from "/me2.jpg";
import openEnvelope from "/OpenEnvelope.svg";
import { PrimaryButton } from "./components/buttons/PrimaryButton";
import { FaPencil } from "react-icons/fa6";

import { Input } from "./components/inputs/Input";

import { useState } from "react";

const UserDataContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  div {
    display: flex;
    gap: 10px;
  }

  #edit-profile-btn {
    cursor: pointer;
    background-color: #63cc92;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    color: #ffffff;
    width: 20px;
    height: 20px;
    transition: all 0.1s;

    &:active {
      box-shadow: inset 0 0 5px #000;
      color: #ffffffcc;
    }
  }
`;

const AdvicesContainer = styled.div`
  background-color: #76f4af;
  padding: 16px;
  border-radius: 32px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    width: 80%;
    text-align: center;
  }
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 1000px;
  right: 0px;
  left: 0px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 0 5px #222222;
  background-color: #efefef;
  border-radius: 16px;
  width: 280px;
  height: 470px;
  padding: 16px;
  visibility: hidden;
  transition: all 0.8s ease;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }

  &.open {
    visibility: visible;
    transform: translateY(-940px);
  }
`;

export const UserProfilePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <UserDataContainer>
        <img src={profilePicture} alt="" />
        <div>
          <h1>Ademir Júnior</h1>
          <span
            id="edit-profile-btn"
            onClick={() => {
              setIsPopupOpen(true);
            }}
          >
            <FaPencil />
          </span>
        </div>
      </UserDataContainer>
      <br />
      <AdvicesContainer>
        <p>Clique no botão abaixo para puxar um conselho aleatório.</p>
        <img src={openEnvelope} alt="" />
        <PrimaryButton>Puxar conselho</PrimaryButton>
      </AdvicesContainer>
      <Popup className={`${isPopupOpen ? "open" : ""}`}>
        <img src={profilePicture} alt="" />
        <br />
        <PrimaryButton $bgcolor="#B02EF9" $fcolor="#ffffff">
          Alterar foto
        </PrimaryButton>
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder=""
          defaultValue="Ademir"
        />
        <Input
          type="text"
          name="name"
          label="Sobrenome"
          placeholder=""
          defaultValue="Júnior"
        />
        <br />
        <div className="buttons">
          <PrimaryButton $width="100%" $bgcolor="#B02EF9" $fcolor="#ffffff">
            Salvar alterações
          </PrimaryButton>
          <PrimaryButton
            $width="100%"
            $bgcolor="#fff"
            $fcolor="#222222"
            onClick={() => {
              setIsPopupOpen(false);
            }}
          >
            Cancelar
          </PrimaryButton>
        </div>
      </Popup>
    </>
  );
};
