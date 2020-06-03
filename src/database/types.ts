// TIP: you define some helper types as you want
type ID = number;

export interface Category {
  id: ID;
  category: string;
  subcategory: Subcategory[]; // TIP: or Array<Subcategory>
}

export interface Subcategory {
  id: number;
  name: string;
}
