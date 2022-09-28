import React from 'react';
import { IProduct } from '../../../models/IProduct';
import MainBanner from './MainBanner';
import PopularProduct from './PopularProduct';

type MainPagePropsType = {
  productsData: IProduct[];
};

const MainPage = ({ productsData }: MainPagePropsType) => (
  <>
    <MainBanner />
    <PopularProduct productsData={productsData} />
  </>
);
export default MainPage;
