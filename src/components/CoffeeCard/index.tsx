import { useState } from 'react'
import { ButtonCart } from '../ButtonCart'
import { InputNumber } from '../InputNumber'
import {
  CategoryContainer,
  CoffeeCardContainer,
  CoffeeCardContent,
  PriceContainer,
} from './styles'

export function CoffeeCard({ image, category, name, description, value }) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  return (
    <CoffeeCardContainer>
      <img src={image} width={100} alt="" />
      <CoffeeCardContent>
        <CategoryContainer>
          {category.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </CategoryContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </CoffeeCardContent>
      <PriceContainer>
        <p>
          R$ <span>{value}</span>
        </p>
        <InputNumber value={coffeeQuantity} onChange={setCoffeeQuantity} />
        <ButtonCart />
      </PriceContainer>
    </CoffeeCardContainer>
  )
}
