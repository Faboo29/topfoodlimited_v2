export interface IHomeContent {
  about: IAbout;
  customers: ICustomer[];
  hero: IHero;
  customerSection: ICustomerSection;
  advantages: IAdvantages;
  staffSection: IStaffSection;
  staffs: IStaff[];
}

export interface IAbout {
  title: string;
  aboutContent: IRichText;
  aboutImage: IImage;
}

export interface ICustomer {
  customerDescription: IRichText;
  name: string;
  sys: ISys;
  customerLogo: {
    title: string;
    url: string;
  };
}

export interface IStaffSection {
  title: string;
}

export interface IStaff {
  name: string;
  firstName: string;
  profilePicture: IImage;
  description: IRichText;
  sys: ISys;
  title: string;
  jobTitle: string;
  order: number;
}

export interface IAdvantages {
  background: IImage;
  title: string;
  description: IRichText;
}

export interface IImage {
  title: string;
  url: string;
}

export interface IProductsCollection {
  items: IProduct[];
}

export interface IProduct {
  productImage: IImage;
  title: string;
  sys: ISys;
}

export interface ICustomerSection {
  title: string;
}

export interface IHero {
  animationDuration: number;
  mainTitle: IRichText;
  title: string;
}

export interface IImage {
  size: number;
  title: string;
  url: string;
}

export interface IRichText {
  json: {
    content: any;
    data: any;
    nodeType: string;
  };
}

export interface ISys {
  id: string;
}
