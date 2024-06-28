import { CoffeeCard } from '../../../../components/CoffeeCard'
import { coffees } from '../../../../contants'
import { OurCoffeesSection } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesSection>
      <h2>Nossos cafés</h2>
      <ul>
        {coffees.map((coffee) => (
          <li key={coffee.id}>
            <CoffeeCard
              id={coffee.id}
              image={coffee.image}
              category={coffee.category}
              name={coffee.name}
              description={coffee.description}
              value={coffee.value}
            />
          </li>
        ))}
      </ul>
    </OurCoffeesSection>
  )
}
