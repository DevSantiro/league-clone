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
  }
`;

export const FormCredentials = styled.form`
  div {
    text-align: center;
  }
`;

export const ButtonLoginForms = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Credentials = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */

  .headerLogin {
    display: flex;
    justify-content: space-between;
  }
`;

export const FundoLogin = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

