import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartPage from '../../components/pages/CartPage';
import { GetUserCartAction } from '../../store/userUnfo/actions';
import { GetUserInfo } from '../../store/userUnfo/selectors';

const CartContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(GetUserInfo);
  useEffect(() => {
    dispatch(GetUserCartAction(user.email ? user.email : 'guest'));
  }, []);
  return <CartPage />;
};

export default CartContainer;
