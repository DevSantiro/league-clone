import { StyledButton } from "./style"

interface ButtonProps {
  icon?: string;
}

export const Button = ({icon}: ButtonProps) => {
  return (
    <StyledButton className={icon ? icon : ''}>#</StyledButton>
  )
}