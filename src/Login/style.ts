import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30vw auto;
  grid-template-rows: 100vh;
  
  .login {
    grid-column: 1/2;
    grid-row: 1/2;
    background: red;
  }

  .wallpaper { 
    grid-column: 2/3;
    grid-row: 1/2;
    background: blue;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .btn_config {
      background: #7b7b7b;
      color: #ffffff;
      cursor: pointer;
      border: none;
      border-radius: 0.3rem;
      padding: 0.5rem;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 2rem;
    }

    .btn_status {
      position: fixed;
      top: 1vh;
      left: 31vw;
    }
  }
`;

export const FormCredentials = styled.form`
  .login_title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const GridForm = styled.div`
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);

  .inputUser {
    display: flex;
    grid-row: 1/2;
  }

  .inputPassword {
    display: flex;
    grid-row: 2/3;
  }

  .buttonsLogin {
    grid-row: 3/4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin: 0 2.7rem;
    grid-gap: 0.5rem;
    
    .btn_facebook {
      grid-column: 1/2;
    }

    .btn_google {
      grid-column: 2/3;
    }

    .btn_mac {
      grid-column: 3/4;
    }
  }

  .chkInput {
    display: flex;
    grid-column: 4/5;
  }

`;

export const ButtonLoginForms = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Credentials = styled.div`

  .info_login {
    float: right;
  }

  .headerLogin {
    display: flex;
    justify-content: center;
    margin: 2rem 0rem 3rem 0rem;

    .img_logo {
      width: 3rem;
    }
  }
`;

export const FundoLogin = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const FormFooter = styled.footer`
  text-align: center;
`;
