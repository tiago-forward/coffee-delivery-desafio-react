import { Minus, Plus } from 'phosphor-react'
import { NumberInputContainer } from './styles'

export function InputNumber({ value, onChange }) {
  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < 10) {
      onChange(value + 1)
    }
  }

  return (
    <NumberInputContainer>
      <button onClick={handleDecrement}>
        <Minus />
      </button>
      <input
        type="number"
        value={value}
        min={0}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      />
      <button onClick={handleIncrement}>
        <Plus />
      </button>
    </NumberInputContainer>
  )
}
