import { useContext } from 'react'
import { ButtonCart } from '../ButtonCart'
import { InputNumber } from '../InputNumber'
import {
  CategoryContainer,
  CoffeeCardContainer,
  CoffeeCardContent,
  PriceContainer,
} from './styles'
import { FormatCurrency } from '../../utility/FormatCurrency'
import { TransactionContext } from '../../contexts/TransactionContext'

interface CoffeeCardProps {
  id: number
  image: string
  category: string[]
  name: string
  description: string
  value: number
}

export function CoffeeCard({
  id,
  image,
  category,
  name,
  description,
  value,
}: CoffeeCardProps) {
  const { coffeeQuantities, setCoffeeQuantity, addSelectedCoffee } =
    useContext(TransactionContext)
  const coffeeQuantity = coffeeQuantities[id] || 1

  const formattedValue = FormatCurrency(value)

  const handleCoffeeQuantity = (quantity: number) => {
    setCoffeeQuantity(id, quantity)
  }

  const handleAddToCart = () => {
    addSelectedCoffee(id, image, name, coffeeQuantity, value)
  }

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
          <span>{formattedValue}</span>
        </p>
        <InputNumber
          coffeeQuantity={coffeeQuantity}
          setCoffeeQuantity={handleCoffeeQuantity}
        />
        <ButtonCart onClick={handleAddToCart} />
      </PriceContainer>
    </CoffeeCardContainer>
  )
}
