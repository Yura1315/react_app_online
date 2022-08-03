/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeRequest from '../../../network';
import { HideLoaderAction, ShowLoaderAction } from '../../../store/loader/actions';
import { GetLoadingState } from '../../../store/loader/selectors';
import { GetUserInfo, GetWhishList } from '../../../store/userUnfo/selectors';
import Loader from '../../common/Loader';
import MCardProduct from '../../common/MCardProduct';
import style from './FavoritePage.module.scss';

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};

const FavoritePage = () => {
  const [whish, setWhish] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(GetLoadingState);
  const userInfo = useSelector(GetUserInfo);
  useEffect(() => {
    const getData = async () => {
      const userWhishlist = await makeRequest({
        url: '/profile/whishlist',
        method: 'GET',
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      setWhish(userWhishlist);
    };
    dispatch(ShowLoaderAction());
    getData();
    dispatch(HideLoaderAction());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <ul className={style.whish_list}>
      {whish.map((el: any) => (
        <MCardProduct
          variants={listVariants}
          initial="hidden"
          animate="visible"
          id={el.id}
          key={el.id}
          title={el.title}
          price={el.price}
          src={el.src}
          alt={el.alt}
          category={el.category}
          productId={el._id}
          bought={el.bought}
          descr={el.descr}
          char={el.char}
          article={el.article}
          sales={el.sales}
        />
      ))}
    </ul>
  );
};

export default FavoritePage;
