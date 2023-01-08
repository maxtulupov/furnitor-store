export interface IsModal {
  open: boolean;
  title: string;
  slug: string;
  price: string;
  images: string[];
  img: string;
}

export interface OneProduct {
  id: number,
  title: string,
  slug: string,
  img: string,
  price: string,
  images: string[]
}