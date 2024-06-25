import ImageAmericano from '../assets/coffee/ImageAmericano.svg'
import ImageArabe from '../assets/coffee/ImageÁrabe.svg'
import ImageCafeComLeite from '../assets/coffee/ImageCafé com Leite.svg'
import ImageCafeGelado from '../assets/coffee/ImageCafé Gelado.svg'
import ImageCapuccino from '../assets/coffee/ImageCapuccino.svg'
import ImageChocolateQuente from '../assets/coffee/ImageChocolate Quente.svg'
import ImageCubano from '../assets/coffee/ImageCubano.svg'
import ImageExpressoCremoso from '../assets/coffee/ImageExpresso Cremoso.svg'
import ImageExpresso from '../assets/coffee/ImageExpresso.svg'
import ImageHavaiano from '../assets/coffee/ImageHavaiano.svg'
import ImageIrlandes from '../assets/coffee/ImageIrlandês.svg'
import ImageLatte from '../assets/coffee/ImageLatte.svg'
import ImageMacchiato from '../assets/coffee/ImageMacchiato.svg'
import ImageMochaccino from '../assets/coffee/ImageMochaccino.svg'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export const coffees = [
  {
    id: 1,
    image: ImageExpresso,
    category: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '9,90',
  },
  {
    id: 2,
    image: ImageAmericano,
    category: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '9,90',
  },
  {
    id: 3,
    image: ImageExpressoCremoso,
    category: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '9,90',
  },
  {
    id: 4,
    image: ImageCafeGelado,
    category: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: '9,90',
  },
  {
    id: 5,
    image: ImageCafeComLeite,
    category: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '9,90',
  },
  {
    id: 6,
    image: ImageLatte,
    category: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '9,90',
  },
  {
    id: 7,
    image: ImageCapuccino,
    category: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '9,90',
  },
  {
    id: 8,
    image: ImageMacchiato,
    category: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: '9,90',
  },
  {
    id: 9,
    image: ImageMochaccino,
    category: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '9,90',
  },
  {
    id: 10,
    image: ImageChocolateQuente,
    category: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '9,90',
  },
  {
    id: 11,
    image: ImageCubano,
    category: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '9,90',
  },
  {
    id: 12,
    image: ImageHavaiano,
    category: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: '9,90',
  },
  {
    id: 13,
    image: ImageArabe,
    category: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '9,90',
  },
  {
    id: 14,
    image: ImageIrlandes,
    category: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: '9,90',
  },
]

export const itemsQuality = [
  {
    id: 1,
    icon: ShoppingCart,
    text: 'Compra simples e segura',
    color: '#C47F17',
  },
  {
    id: 2,
    icon: Package,
    text: 'Embalagem mantém o café intacto',
    color: '#574F4D',
  },
  {
    id: 3,
    icon: Timer,
    text: 'Entrega rápida e rastreada',
    color: '#DBAC2C',
  },
  {
    id: 4,
    icon: Coffee,
    text: 'O café chega fresquinho até você',
    color: '#8047F8',
  },
]
