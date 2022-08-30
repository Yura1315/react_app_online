import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {}, []);
  return (
    <div className={style.page_wrapper} ref={divRef}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
