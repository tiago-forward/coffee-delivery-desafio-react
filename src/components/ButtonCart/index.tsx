import { ButtonCartContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

export function ButtonCart() {
  return (
    <ButtonCartContainer>
      <ShoppingCart size={22} />
    </ButtonCartContainer>
  )
}
