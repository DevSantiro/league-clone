import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.3rem 2.3rem;
  border-radius: 0.3rem;
  border: none;
`;

export const SubmittedButton = styled.button`
  display: block;
  margin: 3.5rem auto;
  border-radius: 1.5rem;
  border: 3px solid #efefef;
  padding: 1.5rem;
  background: transparent;
  cursor: pointer;

  i { 
    color: #efefef;
    font-size: 20px;
  }

  :hover {
    border-color: #f74646f2;
    i {
      color: #f74646f2;
    }
  }
`;
