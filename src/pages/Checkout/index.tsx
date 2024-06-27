import { InputNumber } from '../../components/InputNumber'
import { CheckoutCoffeeCard } from './Components/CoffeeCard'
import { InputText } from './Components/InputText'
import { PaymentCard } from './Components/PaymentCard'
import {
  ButtonsContainer,
  CheckoutPageContainer,
  PaymentCardContainer,
  PricesCoffeesContainer,
  SelectedCoffees,
  SelectedCoffeesContainer,
} from './styles'
import {
  Money,
  Bank,
  CreditCard,
  MapPinLine,
  CurrencyDollar,
} from 'phosphor-react'

import { exampleOfCoffee } from '../../contants'

interface exampleOfCoffee {
  id: number
  image: string
  text: string
  value: number
}

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <section>
        <h2 className="titleSection">Complete seu pedido</h2>
        <form action="">
          <CheckoutCoffeeCard
            icon={<MapPinLine size={22} style={{ color: '#C47F17' }} />}
            title={'Endereço de Entrega'}
            subtitle={'Informe o endereço onde deseja receber seu pedido'}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.063rem',
              }}
            >
              <InputText
                containerProps={{ style: { width: '200px' } }}
                type="text"
                placeholder="CEP"
              />
              <InputText
                containerProps={{ style: { width: '100%' } }}
                type="text"
                placeholder="Rua"
              />
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <InputText
                  containerProps={{ style: { width: '200px' } }}
                  type="text"
                  placeholder="Número"
                />
                <InputText
                  containerProps={{ style: { width: '100%' } }}
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <InputText
                  containerProps={{ style: { width: '200px' } }}
                  type="text"
                  placeholder="Bairro"
                />
                <InputText
                  containerProps={{ style: { width: '100%' } }}
                  type="text"
                  placeholder="Cidade"
                />
                <InputText
                  containerProps={{ style: { width: '60px' } }}
                  type="text"
                  placeholder="UF"
                />
              </div>
            </div>
          </CheckoutCoffeeCard>
          <CheckoutCoffeeCard
            icon={<CurrencyDollar size={22} style={{ color: '#8047F8' }} />}
            title={'Pagamento'}
            subtitle={
              'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
            }
          >
            <PaymentCardContainer>
              <PaymentCard select={'Cartão de crédito'}>
                <CreditCard size={16} style={{ color: '#8047F8' }} />
              </PaymentCard>
              <PaymentCard select={'Cartão de débito'}>
                <Bank size={16} style={{ color: '#8047F8' }} />
              </PaymentCard>
              <PaymentCard select={'Dinheiro'}>
                <Money size={16} style={{ color: '#8047F8' }} />
              </PaymentCard>
            </PaymentCardContainer>
          </CheckoutCoffeeCard>
        </form>
      </section>
      <section>
        <h2 className="titleSection">Cafés selecionados</h2>
        <CheckoutCoffeeCard>
          {exampleOfCoffee.map((item) => (
            <SelectedCoffeesContainer key={item.id}>
              <SelectedCoffees>
                <img src={item.image} alt={item.text} width={64} />
                <div>
                  <p>{item.text}</p>
                  <ButtonsContainer>
                    <InputNumber
                      coffeeQuantity={1}
                      setCoffeeQuantity={(qty) =>
                        console.log(`Set quantity for item ${item.id}: ${qty}`)
                      }
                    />
                    <button>Excluir</button>
                  </ButtonsContainer>
                </div>
              </SelectedCoffees>
              <span>R$ {item.value}</span>
            </SelectedCoffeesContainer>
          ))}
          <PricesCoffeesContainer>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p className="total">Total</p>
              <span className="priceTotal">R$ 33,20</span>
            </div>
            <button>confirmar pedido</button>
          </PricesCoffeesContainer>
        </CheckoutCoffeeCard>
      </section>
    </CheckoutPageContainer>
  )
}
