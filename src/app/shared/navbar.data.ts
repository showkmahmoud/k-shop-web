export type NavbarItem = {
  type: 'item';
  label: string;
  link: string;
};
export type DropdwenNavItem = {
  type: 'dropdown';
  label: string;
  items: NavbarItem[];
};
export const navbarData: (NavbarItem | DropdwenNavItem)[] = [
  {
    label: 'الاقسام',
    type: 'dropdown',
    items: [
      { label: 'ازياء الرجال', link: '', type: 'item' },
      { label: 'ازياء النساء', link: '', type: 'item' },
      { label: 'الموبيلات', link: '', type: 'item' },
      { label: 'الاكسسوارات', link: '', type: 'item' },
    ],
  },
  { label: 'الرئيسية', link: '', type: 'item' },
  { label: 'قائمة الامنيات', link: 'k-shop/wishlist', type: 'item' },
  { label: 'تواصل معنا', link: 'k-shop/wishlist', type: 'item' },
  { label: 'من نحن', link: 'k-shop/wishlist', type: 'item' },
];
