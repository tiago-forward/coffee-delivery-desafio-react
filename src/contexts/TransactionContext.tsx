import { ReactNode, createContext, useMemo, useState } from 'react'
import { FormatCurrency } from '../utility/FormatCurrency'

interface CoffeeQuantityProps {
  [id: number]: number
}

export interface SelectedCoffeesProps {
  id: number
  image: string
  title: string
  quantity: number
  value: number
}

interface TransactionContextType {
  coffeeQuantities: CoffeeQuantityProps
  selectedCoffees: SelectedCoffeesProps[]
  formattedValueTotal: string
  formattedValueTotalWithShipment: string
  setCoffeeQuantity: (id: number, value: number) => void
  addSelectedCoffee: (
    id: number,
    image: string,
    title: string,
    quantity: number,
    value: number,
  ) => void
  onRemoveSelectedCoffee: (id: number) => void
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionContextProviderProps {
  children: ReactNode
}

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [coffeeQuantities, setCoffeeQuantities] = useState<CoffeeQuantityProps>(
    {},
  )
  const [selectedCoffees, setSelectedCoffees] = useState<
    SelectedCoffeesProps[]
  >([])

  const setCoffeeQuantity = (id: number, value: number) => {
    setCoffeeQuantities((state) => {
      const existingValue = state[id] || 0
      return { ...state, [id]: existingValue + value }
    })
  }

  const addSelectedCoffee = (
    id: number,
    image: string,
    title: string,
    quantity: number,
    value: number,
  ) => {
    setSelectedCoffees((prevSelectedCoffees) => {
      const existingSelectedCoffee = prevSelectedCoffees.find(
        (item) => item.id === id,
      )

      if (existingSelectedCoffee) {
        return prevSelectedCoffees.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                value: item.value + value,
              }
            : item,
        )
      } else {
        const newSelectedCoffees = {
          id,
          image,
          title,
          quantity,
          value,
        }

        return [...prevSelectedCoffees, newSelectedCoffees]
      }
    })
  }

  const onRemoveSelectedCoffee = (id: number) => {
    setSelectedCoffees((prevSelectedCoffees) => {
      return prevSelectedCoffees.filter((item) => item.id !== id)
    })
  }

  const totalItemsInCart = useMemo(() => {
    return selectedCoffees.reduce((total, coffee) => total + coffee.value, 0)
  }, [selectedCoffees])

  const formattedValueTotal = FormatCurrency(totalItemsInCart)
  const formattedValueTotalWithShipment = FormatCurrency(totalItemsInCart + 3.5)

  return (
    <TransactionContext.Provider
      value={{
        coffeeQuantities,
        setCoffeeQuantity,
        selectedCoffees,
        addSelectedCoffee,
        onRemoveSelectedCoffee,
        formattedValueTotal,
        formattedValueTotalWithShipment,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
