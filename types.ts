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

export interface CatListAside {
  id: number,
  title: string,
  slug: string,
  icon: string,
  childrens: CatListAsideSubItem[]
}

interface CatListAsideSubItem {
  id: number,
  title: string,
  childSlug: string
}