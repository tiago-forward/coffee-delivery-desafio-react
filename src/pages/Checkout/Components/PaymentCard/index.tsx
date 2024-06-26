import { HTMLAttributes, ReactNode } from 'react'
import { PaymentCardContainer } from './styles'

interface PaymentCardProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  select: string
}

export function PaymentCard({ children, select }: PaymentCardProps) {
  return (
    <PaymentCardContainer>
      {children}
      {select}
    </PaymentCardContainer>
  )
}
