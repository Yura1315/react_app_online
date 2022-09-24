import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OneProductPage from '../../components/pages/OneProductPage';
import { GetOneProductAction } from '../../store/productInfo/actions';
import Loader from '../../components/common/Loader';
import { GetLoadingState } from '../../store/loader/selectors';

const OneProductContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(GetLoadingState);
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetOneProductAction(Number(id)));
  }, []);
  return loading ? <Loader /> : <OneProductPage />;
};

export default OneProductContainer;
