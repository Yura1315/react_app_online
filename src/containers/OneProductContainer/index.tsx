import React from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../../helpers/product';
import OneProductPage from '../../components/pages/OneProductPage';

const OneProductContainer = () => {
  const { id } = useParams();
  console.log(typeof id);
  const oneProduct = product.find((el) => el.id === id);
  return <OneProductPage productInfo={oneProduct} />;
};

export default OneProductContainer;
