import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Box, InputTextContainer } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>
  children?: ReactNode
}

export function InputText({ containerProps, children, ...rest }: Props) {
  return (
    <Box {...containerProps}>
      <InputTextContainer {...rest}>{children}</InputTextContainer>
    </Box>
  )
}
