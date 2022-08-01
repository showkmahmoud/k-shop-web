export enum PRODUCT_TYPE {
  new = 'new',
  recentlyViewed = 'recently viewed',
}
export type Product = {
  id: number;
  image: string;
  title: string;
  category: string;
  rate: number;
  price: number;
  currency: string;
  sale?: number;
  new: boolean;
  type: PRODUCT_TYPE;
  wishedProduct: boolean;
};
