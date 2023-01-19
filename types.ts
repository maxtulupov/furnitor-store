export interface IsModal {
  open: boolean;
  title: string;
  slug: string;
  price: string;
  images: OneProductImages[];
  img: string;
}

export interface OneProduct {
  id: number,
  title: string,
  slug: string,
  img: string,
  price: string,
  images: OneProductImages[]
}
export interface OneProductImages {
  id: string,
  url: string
}

export interface CatListAside {
  id: number,
  title: string,
  slug: string,
  icon: string,
  childrens: CatListAsideSubItem[]
}
export interface CatInfoCatalog {
  id: number,
  title: string,
  slug: string,
  icon?: string,
  childrens?: CatListAsideSubItem[]
}

export interface CatListAsideSubItem {
  id: number,
  title: string,
  childSlug: string
}

export interface NaviLinks {
  id: number,
  title: string,
  path: string,
  childrens?: NaviLinksChildElem[]
  gallery?: NaviLinksGalleryElem[]
}

export interface NaviLinksChildElem {
  id: number,
  title: string,
  path: string,
}
export interface NaviLinksGalleryElem {
  id: number,
  img: string
}

export interface SliceCartItem {
  id: number,
  title: string,
  img: string,
  price: string,
  slug: string,
  count: number
};

export interface SliceCartState {
  totalPrice: number;
  items: SliceCartItem[];
}

export interface SliceState {
  cart: SliceCartState
}
