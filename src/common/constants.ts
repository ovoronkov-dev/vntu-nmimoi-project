import {
  Search_BuildTypeAttribute,
  Search_CoffeeTypeAttribute,
  Search_ControlTypeAttribute,
  Search_DrinkTypeAttribute,
  Search_UseTypeAttribute,
} from './attributes';

export const COFFEE_TYPE_LABELS: Record<Search_CoffeeTypeAttribute, string> = {
  [Search_CoffeeTypeAttribute.Robusta]: 'Робуста',
  [Search_CoffeeTypeAttribute.Mixed]: 'Змішана',
  [Search_CoffeeTypeAttribute.Arabica]: 'Арабіка',
};

export const DRINK_TYPE_LABELS: Record<Search_DrinkTypeAttribute, string> = {
  [Search_DrinkTypeAttribute.Espresso]: 'Еспресо',
  [Search_DrinkTypeAttribute.EspressoAmericano]: 'Еспресо та Американо',
  [Search_DrinkTypeAttribute.WithMilk]: 'З молоком',
};

export const BUILD_TYPE_LABELS: Record<Search_BuildTypeAttribute, string> = {
  [Search_BuildTypeAttribute.Manual]: 'Ручна',
  [Search_BuildTypeAttribute.Automatic]: 'Автоматична',
};

export const USE_TYPE_LABELS: Record<Search_UseTypeAttribute, string> = {
  [Search_UseTypeAttribute.Household]: 'Домашня',
  [Search_UseTypeAttribute.Office]: 'Офісна',
  [Search_UseTypeAttribute.Professional]: 'Для професіоналів',
};

export const CONTROL_TYPE_LABELS: Record<Search_ControlTypeAttribute, string> =
  {
    [Search_ControlTypeAttribute.Manual]: 'Ручне',
    [Search_ControlTypeAttribute.Buttons]: 'Кнопкове',
    [Search_ControlTypeAttribute.Sensor]: 'Сенсорне',
  };
