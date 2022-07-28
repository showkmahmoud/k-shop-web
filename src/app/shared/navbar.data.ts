import { CATEGORIES, DropdwenNavItem, NavbarItem } from './navbar.type';

export const navbarData: (NavbarItem | DropdwenNavItem)[] = [
  {
    label: 'الاقسام',
    type: 'dropdown',
    items: [
      {
        label: 'ازياء الرجال',

        type: 'item',
        category: CATEGORIES.menSection,
      },
      {
        label: 'ازياء النساء',

        type: 'item',
        category: CATEGORIES.womensSection,
      },
      {
        label: 'الموبيلات',

        type: 'item',
        category: CATEGORIES.mobilesSection,
      },
      {
        label: 'الاكسسوارات',

        type: 'item',
        category: CATEGORIES.accessoriesSection,
      },
    ],
  },
  { label: 'الرئيسية', link: '/k-shop/home', type: 'item' },
  { label: 'قائمة الامنيات', link: '/k-shop/wishlist', type: 'item' },
  { label: 'تواصل معنا', link: '/k-shop/contact-us', type: 'item' },
  { label: 'من نحن', link: '/k-shop/about-us', type: 'item' },
];
