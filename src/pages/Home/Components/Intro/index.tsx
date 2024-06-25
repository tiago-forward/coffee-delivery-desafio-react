import { IntroSection, TitleContainer } from './styles'

import CoffeeDelivery from '../../../../assets/coffee-delivery.svg'

import { itemsQuality } from '../../../../contants'

export function Intro() {
  return (
    <IntroSection>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul>
          {itemsQuality.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.id}>
                <button style={{ backgroundColor: item.color }}>
                  <IconComponent />
                </button>
                <span>{item.text}</span>
              </li>
            )
          })}
        </ul>
      </TitleContainer>
      <div>
        <img src={CoffeeDelivery} alt="" />
      </div>
    </IntroSection>
  )
}
