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
  Trash,
} from 'phosphor-react'

import { FormatCurrency } from '../../utility/FormatCurrency'
import { TransactionContext } from '../../contexts/TransactionContext'
import { useContext } from 'react'

export function Checkout() {
  const { setCoffeeQuantity, selectedCoffees } = useContext(TransactionContext)

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
          {selectedCoffees.map((coffee) => {
            // const formattedPrice = FormatCurrency()
            const handleCoffeeQuantity = (quantity: number) => {
              setCoffeeQuantity(coffee.id, quantity)
            }

            const formattedValue = FormatCurrency(coffee.value)

            return (
              <SelectedCoffeesContainer key={coffee.id}>
                <SelectedCoffees>
                  <img src={coffee.image} alt={coffee.title} width={64} />
                  <div>
                    <p>{coffee.title}</p>
                    <ButtonsContainer>
                      <InputNumber
                        coffeeQuantity={coffee.quantity}
                        setCoffeeQuantity={handleCoffeeQuantity}
                      />
                      <button className="delete">
                        <Trash />
                        <span>Excluir</span>
                      </button>
                    </ButtonsContainer>
                  </div>
                </SelectedCoffees>
                <span>{formattedValue}</span>
              </SelectedCoffeesContainer>
            )
          })}
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
