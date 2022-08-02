import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetLoadingState } from '../../store/loader/selectors';
import { GetPopulatProductsAction } from '../../store/productInfo/actions';
import { getPopularProducts } from '../../store/productInfo/selector';
import Loader from '../../components/common/Loader';

const MainContainer = () => {
  const dispatch = useDispatch();
  const productsData: any = useSelector(getPopularProducts);
  const loading = useSelector(GetLoadingState);
  useEffect(() => {
    dispatch(GetPopulatProductsAction());
  }, []);
  return loading ? <Loader /> : <MainPage productsData={productsData} />;
};

export default MainContainer;
