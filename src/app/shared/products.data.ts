import { CATEGORIES } from './navbar.type';
import { Product } from './products.type';

export const productsData: Product[] = [
  {
    image: 'assets/item5.png',
    title: 'تيشرت كم طويل ',
    category: CATEGORIES.menSection,
    rate: 1,
    sale: 90,
    price: 150,
    currency: 'ج.م',
    new: true,
  },
  {
    image: 'assets/item3.png',
    title: 'تيشرت كم طويل ',
    category: CATEGORIES.menSection,
    rate: 2,
    price: 90,
    currency: 'ج.م',
    new: true,
  },
  {
    image: 'assets/item1.png',
    title: 'تيشرت كم طويل ',
    category: CATEGORIES.mobilesSection,
    rate: 4,
    price: 90,
    currency: 'ج.م',
    new: true,
  },
  {
    image: 'assets/item2.png',
    title: 'تيشرت كم طويل ',
    category: CATEGORIES.menSection,
    rate: 5,
    price: 90,
    currency: 'ج.م',
    new: true,
  },
];
