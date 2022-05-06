import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import useDimensions from './use-dimensions';
import style from './ToggleMenu.module.scss';
import Navigation from './Navigation';
import MenuToggle from './MenuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ToggleMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log(height);
  return (
    <motion.nav
      className={style.menu_nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      <motion.div className={style.background} variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default ToggleMenu;
