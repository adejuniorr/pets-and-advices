import styled from "styled-components";
import { useRef, useState } from "react";
import { validateEmail } from "../utils/validateEmail";

import TopLeftSVG from "/curves/top-left-curve.svg";
import RightSVG from "/curves/right-curve.svg";
import BottomRightSVG from "/curves/bottom-right-curve.svg";
import LoveLetter from "/svg/love-letter.svg";
import DogPaws from "/svg/dog-paws.svg";
import DecoBulbs from "/svg/deco-bulbs.svg";
import DogAndCatSVG from "/svg/dog-and-cat.svg";
import Logo from "/svg/pets&tips - logo.svg";
import { FaGithub, FaUser } from "react-icons/fa";

import { BegginBackground } from "./components/BegginBackground";
import { Input } from "./components/inputs/Input";
import { PasswordInput } from "./components/inputs/PasswordInput";
import { Link } from "./components/buttons/Link";
import { PrimaryButton } from "./components/buttons/PrimaryButton";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 10;

  .left_content {
    width: 50%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: var(--white);
    border-radius: 32px;
    padding: 16px;

    #dog-and-cat-svg {
      width: 100%;
    }
  }

  .right_content {
    .login_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin: 0 auto;

      h1 {
        font-size: 28px;
      }

      #header_error_msg {
        height: 20px;
        color: red;
      }

      #loginbtn-and-passwordlink {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin-top: 10px;
      }
    }

    .bottom_links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin-top: 20px;
    }
  }

  @media (max-width: 770px) {
    flex-direction: column;

    .left_content {
      display: none;
    }

    .right_content {
      .login_form {
        padding: 0 16px;
      }
    }

    #autor-link {
      margin-top: 0px;
    }
  }
`;

export const LoginPage = () => {
  // Hooks para autenticação e/ou redirecionamento
  // const { login, isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  const loginRef = useRef();

  const [validEmail, setValidEmail] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  /* Verificação de usuário já logado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);
  */

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setIsLoggingIn(true);

    setFieldErrors({});

    const loginRefs = loginRef.current;

    let email = loginRefs.email.value;
    let password = loginRefs.password.value;

    let errors = {};

    if (!validEmail) errors.email = "Insira um e-mail válido.";
    if (!email)
      errors.email = "Digite o e-mail que usou para cadastrar sua conta.";
    if (!password) errors.password = "Digite sua senha.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsLoggingIn(false);
      return;
    }

    //const ipAddress = await getIpAddress();

    try {
      //await login(cpf, password, ipAddress);
      setTimeout(() => {
        setIsLoggingIn(false);
      }, 3000);
      //navigate("/home");
    } catch (error) {
      errors.cpf = "Usuário ou senha incorretos.";
      setFieldErrors(errors);
      setIsLoggingIn(false);
    }
  };

  return (
    <BegginBackground>
      <img src={TopLeftSVG} id="top-left-curve" alt="" />
      <img src={RightSVG} id="right-curve" alt="" />
      <img src={BottomRightSVG} id="bottom-right-curve" alt="" />
      <img src={LoveLetter} id="love-letter" alt="" />
      <img src={DogPaws} id="dog-paws" alt="" />
      <img src={DecoBulbs} id="deco-bulbs" alt="" />
      <img src={Logo} id="login-mobile-logo" alt="" />
      <LoginContainer>
        <div className="left_content">
          <img src={Logo} alt="" id="login-desktop-logo" />
          <img src={DogAndCatSVG} alt="" id="dog-and-cat-svg" />
        </div>

        <div className="right_content">
          <div className="login_form">
            <div className="form_header">
              <h1>Bem-vindo(a) =)</h1>
              <p id="header_error_msg">{fieldErrors.showAtHeader}</p>
            </div>
            <form ref={loginRef} onSubmit={handleLoginSubmit}>
              <Input
                type="text"
                name="email"
                label="E-mail"
                icon={<FaUser />}
                error={fieldErrors.email}
                required={true}
                placeholder=""
                inputFormater={validateEmail}
                setFormatFlag={setValidEmail}
                onChangeHandler={() => setFieldErrors({})}
              />
              <PasswordInput
                name="password"
                label="Senha"
                error={fieldErrors.password}
                required={true}
                placeholder=""
              />
              <div id="loginbtn-and-passwordlink">
                <PrimaryButton
                  $width="200px"
                  $bgcolor="var(--green05)"
                  $fcolor="var(--black)"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? "Entrando..." : "Entrar"}
                </PrimaryButton>
                <Link href="recuperar-senha">Esqueci minha senha</Link>
              </div>
            </form>
          </div>
          <div className="bottom_links">
            <Link href="cadastro">Criar nova conta</Link>
            <a
              href="https://github.com/adejuniorr"
              target="_blank"
              id="autor-link"
            >
              <FaGithub /> Autor
            </a>
          </div>
        </div>
      </LoginContainer>
    </BegginBackground>
  );
};
