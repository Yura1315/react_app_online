export interface IProduct {
  id: number,
  _id?: string,
  title: string,
  src?: string[],
  category: string[],
  price: number,
  article: number,
  bought: number,
  alt: string,
  char: any[],
  sales: number,
  descr: string,
  size?: string,
  productId?: string;
  img?: string,
  count?: number | undefined;
}
