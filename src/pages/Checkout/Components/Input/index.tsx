import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
} from 'react'

import { Box, InputTextContainer } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const Input = forwardRef(function Input(
  { containerProps, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Box {...containerProps}>
      <InputTextContainer {...rest} ref={ref} />
    </Box>
  )
})
