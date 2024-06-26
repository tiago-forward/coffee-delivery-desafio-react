import { CheckoutCoffeeCard } from './Components/CoffeeCard'
import { InputText } from './Components/InputText'
import { PaymentCard } from './Components/PaymentCard'
import { CheckoutPageContainer, PaymentCardContainer } from './styles'
import {
  Money,
  Bank,
  CreditCard,
  MapPinLine,
  CurrencyDollar,
} from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <section>
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
      <section>Coffe</section>
    </CheckoutPageContainer>
  )
}
