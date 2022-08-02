import React from 'react';
import MainBanner from './MainBanner';
import PopularProduct from './PopularProduct';

type MainPagePropsType = {
  productsData: [
    {
      id: number;
      _id: string;
      title: string;
      src: [string];
      category: [string];
      price: number;
      article: number;
      bought: number;
      alt: string;
      char: any[];
      descr: string;
    }
  ];
};

const MainPage = ({ productsData }: MainPagePropsType) => (
  <>
    <MainBanner />
    <PopularProduct productsData={productsData} />
  </>
);
export default MainPage;
