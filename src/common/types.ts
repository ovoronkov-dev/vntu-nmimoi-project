import {
  Search_BuildTypeAttribute,
  Search_CoffeeTypeAttribute,
  Search_ControlTypeAttribute,
  Search_DrinkTypeAttribute,
  Search_UseTypeAttribute,
} from './attributes';

export interface Data_EntityAttributes {
  price: number;
  brand: string;
  coffeeType: Search_CoffeeTypeAttribute;
  drinkTypes: Search_DrinkTypeAttribute;
  waterVolume: number;
  buildType: Search_BuildTypeAttribute;
  fieldOfUse: Search_UseTypeAttribute;
  vaporPressure: number;
  power: number;
  controlType: Search_ControlTypeAttribute;
}

export interface Data_Entity {
  name: string;
  imageUrl: string;
  attributes: Data_EntityAttributes;
}

export interface Search_QuestionVariant {
  header: string;
  subheader?: string;
  key: keyof Data_EntityAttributes;
  value: unknown;
}

export interface Search_Question {
  title: string;
  variants: Search_QuestionVariant[];
}
