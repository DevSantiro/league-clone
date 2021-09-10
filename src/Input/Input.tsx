import { CredentialsInput } from "./style";

interface InputProps{ 
  type: string;
  classe: string;
  placeholder?: string;
}
export const Input = ({type, classe, placeholder}: InputProps) => {
  return (
    <CredentialsInput
      type={type}
      placeholder={placeholder}
      className={classe}
    />
  );
}