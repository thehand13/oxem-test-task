import React from 'react';
import Link from 'next/link';
import { navLinks } from '@/components/header/Header';
import MainButton from '@/components/UI/buttons/main-button/MainButton';
import styles from './Menu.module.css';
import CrossIcon from '@/components/icons/cross-icon/CrossIcon';

type MenuProps = {
  handleClose: () => void;
  handleOpenPopup: () => void;
};

const Menu = ({ handleClose, handleOpenPopup }: MenuProps) => {
  const closeButtonClickHandler = () => {
    handleClose();
  };

  const mainButtonClickHandler = () => {
    handleClose();
    handleOpenPopup();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <div
            className={styles.sidebarClose}
            onClick={closeButtonClickHandler}
          >
            <CrossIcon />
          </div>
          <ul className={styles.menuList}>
            {navLinks.map((navLink) => (
              <li className={styles.menuItem} key={navLink.route}>
                <Link className={styles.itemLink} href={navLink.route}>
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sidebarButton}>
          <div className={styles.mainButton}>
            <MainButton onClickHandler={mainButtonClickHandler}>
              Оставить заявку
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
