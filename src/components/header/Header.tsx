import { INavLink } from '@/models/nav-link';
import Link from 'next/link';
import React, { useState } from 'react';
import MainIcon from '../icons/main-icon/MainIcon';
import MainButton from '../UI/buttons/main-button/MainButton';
import styles from './Header.module.css';
import MenuIcon from '@/components/icons/menu-icon/MenuIcon';
import Menu from '@/components/menu/Menu';
import Dropdown from '@/components/UI/dropdown/Dropdown';

export const navLinks: INavLink[] = [
  {
    route: '/leasing',
    title: 'Лизинг',
    subItems: [
      { route: '/personal', title: 'Для личного пользования' },
      { route: '/lawyer', title: 'Для юридических лиц' },
      { route: '/calculator', title: 'Калькулятор' },
    ],
  },
  { route: '/catalog', title: 'Каталог' },
  { route: '/about-us', title: 'О нас' },
];

const Header: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <MainIcon />
        <div className={styles.company}>лизинговая компания</div>
      </div>
      <div className={styles.navMenu}>
        <div className={styles.leftMenu}>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {navLinks.map((navLink) => (
                <Dropdown navLink={navLink} key={navLink.route} />
              ))}
            </ul>
          </nav>
          <MainButton buttonStyle="outline" onClickHandler={onOpen}>
            Оставить заявку
          </MainButton>
        </div>
        <div
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <MenuIcon />
        </div>
        {showSidebar && (
          <Menu
            handleClose={() => setShowSidebar(false)}
            handleOpenPopup={onOpen}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
