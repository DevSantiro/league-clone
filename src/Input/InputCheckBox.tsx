import { CredentialsCheked } from "./style";

interface InputCheckBoxProps {
  id: String;
  classe: String;
}

export const InputCheckBox = ({id, classe}: InputCheckBoxProps) => {
  return (
    <div className={`${classe}`}>
      <label htmlFor={`${id}`}>
        <CredentialsCheked 
          type="checkbox"
          id={`${id}`}
        />
        Manter login
      </label>
    </div>
  );
}