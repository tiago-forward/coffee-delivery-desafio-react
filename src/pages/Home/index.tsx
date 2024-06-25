import { Intro } from './Components/Intro'
import { OurCoffees } from './Components/OurCoffees'

import { HomePageContainer } from './styles'

export function Home() {
  return (
    <HomePageContainer>
      <Intro />
      <OurCoffees />
    </HomePageContainer>
  )
}
