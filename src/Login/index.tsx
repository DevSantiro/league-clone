import Fundo from '../assets/img/logo.jpg';
import { Button } from '../Button';
import { Input } from '../Input/Input';
import { InputCheckBox } from '../Input/InputCheckBox';
import { ButtonLoginForms, Container, Credentials, FormCredentials, FormFooter, GridForm } from './style';
import logo from '../assets/img/logo_icon.jpg';
import logoGoogle from '../assets/img/google_logo.svg';
import logoFacebook from '../assets/img/facebook_logo.svg';
import logoApple from '../assets/img/apple_logo.svg';
import { SubmittedButton } from '../Button/style';

export const Login = () => {
  return (
    <Container>
      {/* Login */}
      <Credentials>
        {/* <span className="info_login">?</span> */}

        <div className="headerLogin">
          <img src={logo} className="img_logo" alt="Logo League of Legends (L)" />
        </div>

        <FormCredentials>
          <h1 className="login_title">Fazer Login</h1>
          <GridForm>
            <Input type="text" placeholder="NOME DE USUÁRIO" classe="inputUser" />
            <Input type="password" placeholder="SENHA" classe="inputPassword" />

            <ButtonLoginForms className="buttonsLogin">
              <Button classe="btn_facebook">
                <img src={logoFacebook} width="18" height="18" alt="Facebook" />
              </Button> 

              <Button classe="btn_google">
                <img src={logoGoogle} width="18" height="18" alt="" />
              </Button>

              <Button classe="btn_mac">
                <img src={logoApple} width="18" height="18" alt="" />
              </Button>
            </ButtonLoginForms>

            <InputCheckBox id="chklogado" classe="chkInput" />

            <SubmittedButton><i className="fas fa-arrow-right"></i></SubmittedButton>
          </GridForm>
        </FormCredentials>

        <FormFooter>
          <p>NÃO CONSEGUE INICIAR A SESSÃO?</p>
          <p>CRIAR CONTA</p>
          <span>V.1.0.0</span>
        </FormFooter>

      </Credentials>
      {/* Imagem */}
      <div className="wallpaper">
        <img src={Fundo} alt="Tela de Login League of Legends" />
        {/* <button className="btn_status">!</button> */}
        <button className="btn_config"><i className="fas fa-cog"></i></button>
      </div>
    </Container>
  );
}