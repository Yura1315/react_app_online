/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import Loader from '../../components/common/Loader';
import CatalogPage from '../../components/pages/CatalogPage';
import { GetLoadingState } from '../../store/loader/selectors';
import { GetProductsReposAction } from '../../store/productInfo/actions';
import { GetProducts, GetTotalCountPage } from '../../store/productInfo/selector';
import style from './CatalogContainer.module.scss';

const CatalogContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const dispatch = useDispatch();
  const pageParams = searchParams.get('page') || '1';
  const productsData = useSelector(GetProducts);
  const loading = useSelector(GetLoadingState);
  const totalCount = useSelector(GetTotalCountPage);
  useEffect(() => {
    setSearchParams(`?page=${pageParams}`);
    dispatch(GetProductsReposAction(category!, +pageParams, 9));
  }, [category, searchParams]);
  const handleClick = (data: { selected: number }) => {
    setSearchParams(`?page=${data.selected + 1}`);
    dispatch(GetProductsReposAction(category!, data.selected + 1, 9));
  };
  return (
    <div className={style.catalog_wrap}>
      {loading ? <Loader /> : ''}
      {!productsData.length ? (
        <Loader />
      ) : (
        <>
          <CatalogPage productsData={productsData} />
          <div className={style.products_wrap}>
            <div className={style.paginate_wrap}>
              <ReactPaginate
                forcePage={+pageParams - 1}
                className={style.paginate}
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={Math.ceil(totalCount / 9)}
                onPageChange={handleClick}
                activeClassName={style.paginate_active}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CatalogContainer;
