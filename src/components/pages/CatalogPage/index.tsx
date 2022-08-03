/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import ProductList from './Catalog/ProductList';

type CatalogPagePropsType = {
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
      sales: number;
      char: any[];
      descr: string;
    }
  ];
};

const CatalogPage = ({ productsData }: CatalogPagePropsType) => (
  <ProductList productsData={productsData} />
);

export default CatalogPage;
