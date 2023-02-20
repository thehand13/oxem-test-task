import { ISlideComponents } from '@/models/slide-components';
import React from 'react';
import styles from './NavMenu.module.css';

const NavMenu: React.FC<{
  itemsArray: ISlideComponents[];
  eventHandler: () => void;
}> = (props) => {
  return <div className={styles.navMenu}></div>;
};

export default NavMenu;
