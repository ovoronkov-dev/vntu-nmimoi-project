import {
  Search_BrandAttribute,
  Search_PowerAttribute,
  Search_PriceAttribute,
  Search_VaporPressureAttribute,
  Search_WaterVolumeAttribute,
} from './common/attributes';
import { Data_Entity, Search_QuestionVariant } from './common/types';
import DATA from './data/data.json';

export const getSearchBrand = (brand: string) =>
  ['Keurig', 'Jura', 'Nespresso'].includes(brand)
    ? Search_BrandAttribute.Unpopular
    : Search_BrandAttribute.Popular;

const getSearchPrice = (price: number) => {
  if (price >= 500 && price < 1000) return Search_PriceAttribute.Low;
  if (price >= 1000 && price < 1500) return Search_PriceAttribute.Medium;
  return Search_PriceAttribute.High;
};

const getSearchWater = (volume: number) => {
  if (volume >= 1 && volume < 1.5) return Search_WaterVolumeAttribute.Small;
  if (volume >= 1.5 && volume < 2) return Search_WaterVolumeAttribute.Medium;
  return Search_WaterVolumeAttribute.Large;
};

const getSearchVapor = (pressure: number) => {
  if (pressure < 15) return Search_VaporPressureAttribute.Low;
  if (pressure >= 15 && pressure < 20)
    return Search_VaporPressureAttribute.Medium;
  return Search_VaporPressureAttribute.High;
};

const getSearchPower = (power: number) => {
  if (power <= 1000) return Search_PowerAttribute.Low;
  if (power > 1000 && power <= 2000) return Search_PowerAttribute.Medium;
  return Search_PowerAttribute.High;
};

export const searchByAttributes = (
  attributes: Search_QuestionVariant[]
): Data_Entity[] => {
  return DATA.data.filter((item) => {
    console.log(
      item,
      attributes.filter((attr) => {
        if (attr.key === 'brand') {
          return attr.value === getSearchBrand(item.attributes.brand);
        } else if (attr.key === 'price') {
          return attr.value === getSearchPrice(item.attributes.price);
        } else if (attr.key === 'waterVolume') {
          return attr.value === getSearchWater(item.attributes.waterVolume);
        } else if (attr.key === 'vaporPressure') {
          return attr.value === getSearchVapor(item.attributes.vaporPressure);
        } else if (attr.key === 'power') {
          return attr.value === getSearchPower(item.attributes.power);
        } else {
          return attr.value === item.attributes[attr.key];
        }
      }),
      'attrs'
    );

    return (
      attributes.filter((attr) => {
        if (attr.key === 'brand') {
          return attr.value === getSearchBrand(item.attributes.brand);
        } else if (attr.key === 'price') {
          return attr.value === getSearchPrice(item.attributes.price);
        } else if (attr.key === 'waterVolume') {
          return attr.value === getSearchWater(item.attributes.waterVolume);
        } else if (attr.key === 'vaporPressure') {
          return attr.value === getSearchVapor(item.attributes.vaporPressure);
        } else if (attr.key === 'power') {
          return attr.value === getSearchPower(item.attributes.power);
        } else {
          return attr.value === item.attributes[attr.key];
        }
      }).length === attributes.length
    );
  });
};
