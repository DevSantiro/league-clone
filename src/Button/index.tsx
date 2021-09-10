import { ReactNode } from "react"
import { StyledButton } from "./style"
interface ButtonProps {
  classe?: string;
  children?: ReactNode;
}

export const Button = ({classe, children}: ButtonProps) : JSX.Element=> {
  return (
    <StyledButton className={classe ? classe : ''}>
      {children}
    </StyledButton>
  )
}