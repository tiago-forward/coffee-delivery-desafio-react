import { useState } from 'react'
import { ButtonCart } from '../ButtonCart'
import { InputNumber } from '../InputNumber'
import {
  CategoryContainer,
  CoffeeCardContainer,
  CoffeeCardContent,
  PriceContainer,
} from './styles'

interface CoffeeCardProps {
  image: string
  category: string[]
  name: string
  description: string
  value: string
}

export function CoffeeCard({
  image,
  category,
  name,
  description,
  value,
}: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)

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
        <InputNumber
          coffeeQuantity={coffeeQuantity}
          setCoffeeQuantity={setCoffeeQuantity}
        />
        <ButtonCart />
      </PriceContainer>
    </CoffeeCardContainer>
  )
}
