import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { CheckoutCoffeeCardContainer } from './styles'

interface CheckoutCoffeeCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  icon?: ReactElement
  title?: string
  subtitle?: string
}

export function CheckoutCoffeeCard({
  children,
  icon,
  title,
  subtitle,
  ...rest
}: CheckoutCoffeeCardProps) {
  return (
    <CheckoutCoffeeCardContainer {...rest}>
      <header>
        {icon}
        <div>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </header>
      {children}
    </CheckoutCoffeeCardContainer>
  )
}
