import { CredentialsInput } from "./style";

interface InputProps{ 
  type: string;
  placeholder?: string;
}
export const Input = ({type, placeholder}: InputProps) => {
  return (
    <CredentialsInput
      type={type}
      placeholder={placeholder}
    />
  );
}