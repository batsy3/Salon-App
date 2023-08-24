export interface ISupplyDTO {
  name: string;
  quantity: number;
  category: ICategory;
  last_restocked: IRestockedDTO[];
}

export interface ICategoryDTO {
  name: string;
  description: string;
}

export interface IRestockedDTO {
  date: Date;
  quantity: number;
}

export interface ISupply {
  id: string;
  name: string;
  quantity: number;
  category: ICategory;
  last_restocked: IRestocked[];
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
}
export interface IRestocked {
  id: string;
  date: Date;
  quantity: number;
}
