import { ReactNode, createContext, useState } from 'react'

interface CoffeeQuantityProps {
  [id: number]: number
}

interface TransactionContextType {
  coffeeQuantities: CoffeeQuantityProps
  setCoffeeQuantity: (id: number, value: number) => void
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionContextProviderProps {
  children: ReactNode
}

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [coffeeQuantities, setCoffeeQuantities] = useState({})

  const setCoffeeQuantity = (id: number, value: number) => {
    setCoffeeQuantities((state) => ({ ...state, [id]: value }))
  }

  return (
    <TransactionContext.Provider
      value={{ coffeeQuantities, setCoffeeQuantity }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
