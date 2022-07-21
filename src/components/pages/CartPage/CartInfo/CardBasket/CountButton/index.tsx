/* eslint-disable no-confusing-arrow */
/* eslint-disable no-underscore-dangle */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCardAction } from '../../../../../../store/userUnfo/actions';
import { GetCartInfo, GetUserInfo } from '../../../../../../store/userUnfo/selectors';
import style from './CountButton.module.scss';

type CountButtonPropsType = {
  count: number;
  idProduct: any;
};

const CountButton = ({ count, idProduct }: CountButtonPropsType) => {
  const [oldCount, setCount] = useState(count);
  const product = useSelector(GetCartInfo);
  const user = useSelector(GetUserInfo);
  const dispatch = useDispatch();
  const countStore = product.find((el: any) => el._id === idProduct);
  const handlerIncrement = () => {
    const newCount = {
      cart: {
        _id: countStore._id,
        id: countStore.id,
        src: countStore.src,
        alt: countStore.alt,
        descr: countStore.descr,
        title: countStore.title,
        price: countStore.price,
        category: countStore.category,
        article: countStore.article,
        char: countStore.char,
        bought: countStore.bought,
        count: oldCount + 1,
      },
      email: user.email,
    };
    // const newCount = { countStore, email: user.email };
    dispatch(AddCardAction(newCount));
  };
  const handleDecrement = () => {
    const newCount = {
      cart: {
        _id: countStore._id,
        id: countStore.id,
        src: countStore.src,
        alt: countStore.alt,
        descr: countStore.descr,
        title: countStore.title,
        price: countStore.price,
        category: countStore.category,
        article: countStore.article,
        char: countStore.char,
        bought: countStore.bought,
        count: oldCount - 1,
      },
      email: user.email,
    };
    dispatch(AddCardAction(newCount));
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(+e.target.value)) {
      setCount(countStore.count);
    } else {
      setCount(+e.target.value);
    }
  };
  const handleOnblur = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value !== countStore.count && +e.target.value !== 0) {
      const newCount = {
        cart: {
          _id: countStore._id,
          id: countStore.id,
          src: countStore.src,
          alt: countStore.alt,
          descr: countStore.descr,
          title: countStore.title,
          price: countStore.price,
          category: countStore.category,
          article: countStore.article,
          char: countStore.char,
          bought: countStore.bought,
          count: oldCount,
        },
        email: user.email,
      };
      dispatch(AddCardAction(newCount));
    }
  };
  return (
    <form className={style.count_wrap}>
      <button
        className={oldCount === 1 ? style.count_btn_disable : style.count_btn}
        type="button"
        onClick={handleDecrement}
        disabled={oldCount === 1}>
        -
      </button>
      <input
        className={style.count_input}
        type="text"
        maxLength={2}
        minLength={1}
        value={oldCount === 0 ? 0 : oldCount}
        onChange={handleChange}
        onBlur={handleOnblur}
      />
      <button className={style.count_btn} type="button" onClick={handlerIncrement}>
        +
      </button>
    </form>
  );
};

export default CountButton;
