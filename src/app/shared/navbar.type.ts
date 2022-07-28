export enum CATEGORIES {
  menSection = 'men',
  womensSection = 'womens',
  mobilesSection = 'mobiles',
  accessoriesSection = 'accessories',
}
export type NavbarItem = {
  type: 'item';
  label: string;
  link?: string;
  category?: CATEGORIES;
};
export type DropdwenNavItem = {
  type: 'dropdown';
  label: string;
  items: NavbarItem[];
};
