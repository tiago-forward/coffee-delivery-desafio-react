import { ButtonHTMLAttributes } from 'react'
import { ButtonCartContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface ButtonCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonCart(props: ButtonCartProps) {
  return (
    <ButtonCartContainer {...props}>
      <ShoppingCart size={22} />
    </ButtonCartContainer>
  )
}
