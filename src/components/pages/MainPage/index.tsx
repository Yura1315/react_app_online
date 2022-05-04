import React from 'react';
import MainBanner from './MainBanner';
import PopularProduct from './PopularProduct';

type MainPagePropsType = {
  productsData: any[];
};

const MainPage = ({ productsData }: MainPagePropsType) => (
  <>
    <MainBanner />
    <PopularProduct productsData={productsData} />
  </>
);
export default MainPage;
