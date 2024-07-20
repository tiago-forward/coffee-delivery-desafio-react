import { HTMLAttributes, ReactNode } from 'react'
import { PaymentCardContainer } from './styles'

interface PaymentCardProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  select: string
  isSelected: boolean
}

export function InputPaymentCard({
  children,
  select,
  isSelected,
  ...props
}: PaymentCardProps) {
  return (
    <PaymentCardContainer isSelected={isSelected} {...props}>
      {children}
      {select}
    </PaymentCardContainer>
  )
}
