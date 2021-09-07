import Fundo from '../assets/img/logo.jpg';
import { Button } from '../Button';
import { Input } from '../Input/Input';
import { InputCheckBox } from '../Input/InputCheckBox';
import { ButtonLoginForms, Container, Credentials, FormCredentials } from './style';

export const Login = () => {
  return (
    <Container>
      {/* Login */}
      <Credentials>
        <div className="headerLogin">
          <h1>L</h1>
          <span>?</span>
        </div>
        
        <FormCredentials>
          <h2>Insira sua Conta Riot</h2>
          <div>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />

            <ButtonLoginForms>
              <Button icon="btn_facebook" />
              <Button icon="btn_google"   />
              <Button icon="btn_mac"      />
            </ButtonLoginForms>

            <InputCheckBox id="chklogado" />

            <button>Entrar</button>
          </div>
        </FormCredentials>

        <footer>
          <span>NÃO CONSEGUE INICIAR A SESSÃO?</span>
          <span>V.1.0.0</span>
        </footer>

      </Credentials>
      {/* Imagem */}
      <div className="wallpaper">
        <img src={Fundo} alt="Tela de Login League of Legends" />
      </div>
    </Container>
  );
}