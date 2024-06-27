import { successInfo } from '../../contants'
import { SuccessContainer } from './styles'

import Illustration from '../../assets/Illustration.svg'

export function Success() {
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
