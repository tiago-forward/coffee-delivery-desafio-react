import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { NavLink } from 'react-router-dom'

export function Header() {
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
          <span>0</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
