import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../helpers';
import UserList from './UserList';
import Button from '../../common/Button';
import MainBanner from './MainBanner';

const MainPage = () => (
  // useEffect(() => console.log('MAIN_PAGE - MOUNT'), []);

  // // const { state } = useLocation() as { state: { isOpen: boolean } };
  // const location: any = useLocation();

  // const [listVisible, setListVisible] = useState(false);
  // const handler = () => {
  //   setListVisible((prev) => !prev);
  // };

  // useEffect(() => {
  //   if (location?.state?.isOpen) {
  //     setListVisible(true);
  //   }
  // }, [location?.state?.isOpen]);

  <>
    <MainBanner />
    {/* <h1>User List</h1>
      {listVisible ? <UserList data={data} /> : <h2>Список скрыт</h2>}
      {/* {listVisible && <UserList data={data} />} */}
    {/* <Button title={listVisible ? 'Скрыть список' : 'Показать список'} onClick={handler} /> */}
  </>
);
export default MainPage;
