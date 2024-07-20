import { InputNumber } from '../../components/InputNumber'
import { CheckoutCoffeeCard } from './Components/CoffeeCard'
import { Input } from './Components/Input'
import { InputPaymentCard } from './Components/InputPaymentCard'

import {
  ButtonsContainer,
  CheckoutPageContainer,
  ErrorMessage,
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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useNavigate } from 'react-router-dom'

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .regex(/^\d{5}-\d{3}$/, 'Insira um CEP com o formato correto (#####-###).'),
  road: zod.string().trim().min(3, 'É necessário no mínimo 3 caracteres.'),
  number: zod.preprocess(
    (value) => Number(value),
    zod.number().min(1, 'O número é obrigatório.'),
  ),
  complement: zod.string().optional(),
  neighborhood: zod
    .string()
    .trim()
    .min(3, 'É necessário no mínimo 3 caracteres.'),
  city: zod.string().trim().min(3, 'É necessário no mínimo 3 caracteres.'),
  country: zod.string().trim().min(2, 'É necessário no mínimo 2 caracteres.'),
  paymentMethod: zod.string().nonempty('Selecione um método de pagamento.'),
})

type NewAddressData = zod.infer<typeof newAddressFormValidationSchema>

export function Checkout() {
  const {
    setCoffeeQuantity,
    selectedCoffees,
    onRemoveSelectedCoffee,
    formattedValueTotal,
    formattedValueTotalWithShipment,
  } = useContext(TransactionContext)

  const handleCoffeeQuantity = (id: number, quantity: number) => {
    setCoffeeQuantity(id, quantity)
  }

  const handleRemoveSelectedCoffee = (id: number) => {
    onRemoveSelectedCoffee(id)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<NewAddressData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      road: '',
      number: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      country: '',
      paymentMethod: '',
    },
  })

  const navigate = useNavigate()

  function handleRegisteredAddress(data: NewAddressData) {
    navigate('/success', { state: { ...data } })
  }

  const paymentMethod = watch('paymentMethod')

  return (
    <CheckoutPageContainer>
      <section>
        <h2 className="titleSection">Complete seu pedido</h2>
        <form id="address" onSubmit={handleSubmit(handleRegisteredAddress)}>
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
              <Input
                id="cep"
                containerProps={{ style: { width: '200px' } }}
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors.cep && (
                <ErrorMessage>
                  {errors.cep.message?.toString() ?? 'Erro desconhecido'}
                </ErrorMessage>
              )}
              <Input
                id="road"
                containerProps={{ style: { width: '100%' } }}
                type="text"
                placeholder="Rua"
                {...register('road')}
              />
              {errors.road && (
                <ErrorMessage>
                  {errors.road.message?.toString() ?? 'Erro desconhecido'}
                </ErrorMessage>
              )}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <Input
                    id="number"
                    containerProps={{ style: { width: '200px' } }}
                    placeholder="Número"
                    {...register('number', { valueAsNumber: true })}
                  />
                  {errors.number && (
                    <ErrorMessage>
                      {errors.number.message?.toString() ?? 'Erro desconhecido'}
                    </ErrorMessage>
                  )}
                </div>
                <Input
                  id="complement"
                  containerProps={{ style: { width: '100%' } }}
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <Input
                    id="neighborhood"
                    containerProps={{ style: { width: '200px' } }}
                    type="text"
                    placeholder="Bairro"
                    {...register('neighborhood')}
                  />
                  {errors.neighborhood && (
                    <ErrorMessage>
                      {errors.neighborhood.message?.toString() ??
                        'Erro desconhecido'}
                    </ErrorMessage>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <Input
                    id="city"
                    containerProps={{ style: { width: '100%' } }}
                    type="text"
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  {errors.city && (
                    <ErrorMessage>
                      {errors.city.message?.toString() ?? 'Erro desconhecido'}
                    </ErrorMessage>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <Input
                    id="country"
                    containerProps={{ style: { width: '60px' } }}
                    type="text"
                    placeholder="UF"
                    {...register('country')}
                  />
                  {errors.country && (
                    <ErrorMessage>
                      {errors.country.message?.toString() ??
                        'Erro desconhecido'}
                    </ErrorMessage>
                  )}
                </div>
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
              <InputPaymentCard
                select={'Cartão de crédito'}
                isSelected={paymentMethod === 'credit'}
              >
                <input
                  type="radio"
                  value="credit"
                  id="paymentCardCredit"
                  onChange={() => setValue('paymentMethod', 'credit')}
                  checked={paymentMethod === 'credit'}
                />
                <CreditCard size={16} style={{ color: '#8047F8' }} />
              </InputPaymentCard>
              <InputPaymentCard
                select={'Cartão de débito'}
                isSelected={paymentMethod === 'debit'}
              >
                <input
                  type="radio"
                  value="debit"
                  id="paymentCardDebit"
                  onChange={() => setValue('paymentMethod', 'debit')}
                  checked={paymentMethod === 'debit'}
                />
                <Bank size={16} style={{ color: '#8047F8' }} />
              </InputPaymentCard>
              <InputPaymentCard
                select={'Dinheiro'}
                isSelected={paymentMethod === 'cash'}
              >
                <input
                  type="radio"
                  value="cash"
                  id="paymentCardCash"
                  onChange={() => setValue('paymentMethod', 'cash')}
                  checked={paymentMethod === 'cash'}
                />
                <Money size={16} style={{ color: '#8047F8' }} />
              </InputPaymentCard>
            </PaymentCardContainer>
            {errors.paymentMethod && (
              <ErrorMessage>Selecione um método de pamento!</ErrorMessage>
            )}
          </CheckoutCoffeeCard>
        </form>
      </section>
      <section>
        <h2 className="titleSection">Cafés selecionados</h2>
        <CheckoutCoffeeCard>
          {selectedCoffees.length === 0 ? (
            <p>Não há cafés selecionados!</p>
          ) : (
            selectedCoffees.map((coffee) => {
              const formattedValue = FormatCurrency(
                coffee.value * coffee.quantity,
              )

              return (
                <SelectedCoffeesContainer key={coffee.id}>
                  <SelectedCoffees>
                    <img src={coffee.image} alt={coffee.title} width={64} />
                    <div>
                      <p>{coffee.title}</p>
                      <ButtonsContainer>
                        <InputNumber
                          coffeeQuantity={coffee.quantity}
                          setCoffeeQuantity={(quantity) =>
                            handleCoffeeQuantity(coffee.id, quantity)
                          }
                        />
                        <button
                          className="delete"
                          onClick={() => handleRemoveSelectedCoffee(coffee.id)}
                        >
                          <Trash />
                          <span>Excluir</span>
                        </button>
                      </ButtonsContainer>
                    </div>
                  </SelectedCoffees>
                  <span>{formattedValue}</span>
                </SelectedCoffeesContainer>
              )
            })
          )}
          {selectedCoffees.length > 0 && (
            <PricesCoffeesContainer>
              <div>
                <p>Total de itens</p>
                <span>{formattedValueTotal}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <p className="total">Total</p>
                <span className="priceTotal">
                  {formattedValueTotalWithShipment}
                </span>
              </div>
              <button type="submit" form="address">
                confirmar pedido
              </button>
            </PricesCoffeesContainer>
          )}
        </CheckoutCoffeeCard>
      </section>
    </CheckoutPageContainer>
  )
}
