import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OneProductPage from '../../components/pages/OneProductPage';
import getProducts from '../../store/productInfo/selector';

const OneProductContainer = () => {
  const product = useSelector(getProducts);
  const { id } = useParams();
  const oneProduct = product.find((el) => el.id === +id!);
  return <OneProductPage productInfo={oneProduct} />;
};

export default OneProductContainer;
