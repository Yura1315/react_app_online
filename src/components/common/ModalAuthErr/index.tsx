import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAuthErrAction } from '../../../store/userUnfo/actions';
import { GetAuthError } from '../../../store/userUnfo/selectors';
import style from './ModalAuthErr.module.scss';

type ModalAuthErrPropsType = {
  text: string;
};

const ModalAuthErr = ({ text }: ModalAuthErrPropsType) => {
  const modalErr = useSelector(GetAuthError);
  const dispatch = useDispatch();
  const hendler = () => {
    dispatch(RemoveAuthErrAction());
  };
  console.log('ff');
  return (
    <div className={style.modal_wrap}>
      <div className={style.modal_mesg}>{text}</div>
      <button type="button" onClick={() => hendler()}>
        Закрыть
      </button>
    </div>
  );
};

export default ModalAuthErr;
