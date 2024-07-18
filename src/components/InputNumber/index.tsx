import { Minus, Plus } from 'phosphor-react'
import { NumberInputContainer } from './styles'
import { ChangeEvent } from 'react'

interface InputNumberProps {
  coffeeQuantity: number
  setCoffeeQuantity?: (coffeeQuantity: number) => void
}

export function InputNumber({
  coffeeQuantity,
  setCoffeeQuantity,
}: InputNumberProps) {
  const handleDecrement = () => {
    if (coffeeQuantity > 1 && setCoffeeQuantity) {
      setCoffeeQuantity(coffeeQuantity - 1)
    }
  }

  const handleIncrement = () => {
    if (coffeeQuantity < 10 && setCoffeeQuantity) {
      setCoffeeQuantity(coffeeQuantity + 1)
    }
  }

  function handleValueInput(event: ChangeEvent<HTMLInputElement>) {
    const valueInput = parseInt(event.target.value)
    if (setCoffeeQuantity) {
      setCoffeeQuantity(valueInput)
    }
  }

  return (
    <NumberInputContainer>
      <button onClick={handleDecrement}>
        <Minus />
      </button>
      <input
        type="number"
        value={coffeeQuantity}
        min={1}
        onChange={handleValueInput}
      />
      <button onClick={handleIncrement}>
        <Plus />
      </button>
    </NumberInputContainer>
  )
}
