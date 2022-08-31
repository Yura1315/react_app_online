import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetPopulatProductsAction } from '../../store/productInfo/actions';
import { getPopularProducts } from '../../store/productInfo/selector';

const MainContainer = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(getPopularProducts);
  useEffect(() => {
    dispatch(GetPopulatProductsAction());
  }, []);
  return <MainPage productsData={productsData} />;
};

export default MainContainer;
