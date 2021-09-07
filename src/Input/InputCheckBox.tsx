import { CredentialsInput } from "./style";

interface InputCheckBoxProps {
  id: String;
}

export const InputCheckBox = ({id}: InputCheckBoxProps) => {
  return (
    <div>
      <CredentialsInput 
        type="checkbox"
        id={`${id}`}
      />
      <label htmlFor={`${id}`}>STAY SIGNED IN</label>
    </div>
  );
}