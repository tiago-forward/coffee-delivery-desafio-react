import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionContext'

export function Header() {
  const { selectedCoffees } = useContext(TransactionContext)

  const totalItemsInCart = selectedCoffees.length

  return (
    <HeaderContainer>
      <span>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
      </span>
      <nav>
        <NavLink to="/" title="Map" className="map">
          <MapPin size={22} />
          <span>Campina Grande, PB</span>
        </NavLink>
        <NavLink to="/checkout" title="Cart" className="cart">
          <ShoppingCart size={22} />
          <span>{totalItemsInCart}</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
