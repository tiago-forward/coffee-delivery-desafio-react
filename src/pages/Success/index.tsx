// import { successInfo } from '../../contants'
import { SuccessContainer } from './styles'

import Illustration from '../../assets/Illustration.svg'

import { useLocation } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const location = useLocation()
  const { state } = location

  const successInfo = [
    {
      id: 1,
      icon: MapPin,
      description: `Entrega em ${state.road}, ${state.number} ${state.neighborhood} - ${state.city}, ${state.country}`,
      color: '#8047F8',
    },
    {
      id: 2,
      icon: Timer,
      title: 'Previsão de entrega',
      description: '20 min - 30 min',
      color: '#DBAC2C',
    },
    {
      id: 3,
      icon: CurrencyDollar,
      title: 'Pagamento na entrega',
      description: state.paymentMethod,
      color: '#C47F17',
    },
  ]

  return (
    <SuccessContainer>
      <section>
        <div className="header">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="detailsBorderContainer">
          <ul className="details">
            {successInfo.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.id}>
                  <div
                    className="iconContainer"
                    style={{ backgroundColor: item.color }}
                  >
                    <IconComponent size={16} />
                  </div>
                  <div style={{ width: '22rem' }}>
                    <p className="title">{item.title}</p>
                    <span className="description">{item.description}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <img src={Illustration} alt="Transportador em cima da moto" />
      </section>
    </SuccessContainer>
  )
}
