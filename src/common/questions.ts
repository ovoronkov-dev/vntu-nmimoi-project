import {
  Search_BrandAttribute,
  Search_BuildTypeAttribute,
  Search_CoffeeTypeAttribute,
  Search_ControlTypeAttribute,
  Search_DrinkTypeAttribute,
  Search_PowerAttribute,
  Search_PriceAttribute,
  Search_UseTypeAttribute,
  Search_VaporPressureAttribute,
  Search_WaterVolumeAttribute,
} from './attributes';
import { Search_Question } from './types';

export const QUESTIONS: Search_Question[] = [
  {
    title: 'Який бюджет ви готові виділити для покупки кавової машини?',
    variants: [
      {
        header: 'Низький',
        subheader: '500 - 1000',
        key: 'price',
        value: Search_PriceAttribute.Low,
      },
      {
        header: 'Середній',
        subheader: '1000 - 1500',
        key: 'price',
        value: Search_PriceAttribute.Medium,
      },
      {
        header: 'Високий',
        subheader: '1500 - 2000',
        key: 'price',
        value: Search_PriceAttribute.High,
      },
    ],
  },
  {
    title: 'Якого бренду кавову машину Ви шукаєте?',
    variants: [
      {
        header: 'Непопулярний',
        subheader: 'Jura, Nespresso',
        key: 'brand',
        value: Search_BrandAttribute.Unpopular,
      },
      {
        header: 'Популярний',
        subheader: 'Delonghi, Philips',
        key: 'brand',
        value: Search_BrandAttribute.Popular,
      },
    ],
  },
  {
    title: 'Якому типу кави Ви надаєте перевагу?',
    variants: [
      {
        header: 'Робуста',
        key: 'coffeeType',
        value: Search_CoffeeTypeAttribute.Robusta,
      },
      {
        header: 'Змішана',
        key: 'coffeeType',
        value: Search_CoffeeTypeAttribute.Mixed,
      },
      {
        header: 'Арабіка',
        key: 'coffeeType',
        value: Search_CoffeeTypeAttribute.Arabica,
      },
    ],
  },
  {
    title: 'Які напої Ви плануєте готувати?',
    variants: [
      {
        header: 'Еспресо',
        key: 'drinkTypes',
        value: Search_DrinkTypeAttribute.Espresso,
      },
      {
        header: 'Еспресо та Американо',
        key: 'drinkTypes',
        value: Search_DrinkTypeAttribute.EspressoAmericano,
      },
      {
        header: 'Напої із додаванням молока',
        key: 'drinkTypes',
        value: Search_DrinkTypeAttribute.WithMilk,
      },
    ],
  },
  {
    title: 'Який обєм резервуару для води буде зручнішим для Вас?',
    variants: [
      {
        header: 'Малий',
        subheader: '1 - 1.5л',
        key: 'waterVolume',
        value: Search_WaterVolumeAttribute.Small,
      },
      {
        header: 'Середній',
        subheader: '1.5 - 2л',
        key: 'waterVolume',
        value: Search_WaterVolumeAttribute.Medium,
      },
      {
        header: 'Великий',
        subheader: '2 - 3л',
        key: 'waterVolume',
        value: Search_WaterVolumeAttribute.Large,
      },
    ],
  },
  {
    title: 'Який тип конструкції для Вас зручніший?',
    variants: [
      {
        header: 'Ручна',
        key: 'buildType',
        value: Search_BuildTypeAttribute.Manual,
      },
      {
        header: 'Автоматична',
        key: 'buildType',
        value: Search_BuildTypeAttribute.Automatic,
      },
    ],
  },
  {
    title: 'З якою метою Ви плануєте використовувати кавову машину?',
    variants: [
      {
        header: 'Домашнє використання',
        key: 'fieldOfUse',
        value: Search_UseTypeAttribute.Household,
      },
      {
        header: 'Офіс',
        key: 'fieldOfUse',
        value: Search_UseTypeAttribute.Office,
      },
      {
        header: 'Для професіоналів',
        key: 'fieldOfUse',
        value: Search_UseTypeAttribute.Professional,
      },
    ],
  },
  {
    title: 'З яким тиском пари Вам потрібна кавова машина?',
    variants: [
      {
        header: 'Низьким',
        subheader: '0 - 15 бар',
        key: 'vaporPressure',
        value: Search_VaporPressureAttribute.Low,
      },
      {
        header: 'Середнім',
        subheader: '15 - 20 бар',
        key: 'vaporPressure',
        value: Search_VaporPressureAttribute.Medium,
      },
      {
        header: 'Високим',
        subheader: '20 - 30 бар',
        key: 'vaporPressure',
        value: Search_VaporPressureAttribute.High,
      },
    ],
  },
  {
    title: 'Якої потужності кавову машину Ви шукаєте?',
    variants: [
      {
        header: 'Низька',
        subheader: '0 - 1000 Вт',
        key: 'power',
        value: Search_PowerAttribute.Low,
      },
      {
        header: 'Середня',
        subheader: '1000 - 2000 Вт',
        key: 'power',
        value: Search_PowerAttribute.Medium,
      },
      {
        header: 'Висока',
        subheader: '2000 - 3000 Вт',
        key: 'power',
        value: Search_PowerAttribute.High,
      },
    ],
  },
  {
    title: 'З яким видом керування Вам зручніше працювати?',
    variants: [
      {
        header: 'Ручне',
        key: 'controlType',
        value: Search_ControlTypeAttribute.Manual,
      },
      {
        header: 'Кнопкове',
        key: 'controlType',
        value: Search_ControlTypeAttribute.Buttons,
      },
      {
        header: 'Сенсорне',
        key: 'controlType',
        value: Search_ControlTypeAttribute.Sensor,
      },
    ],
  },
];
