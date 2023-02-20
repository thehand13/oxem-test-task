import { INavLink } from '@/models/nav-link';
import Link from 'next/link';
import React, { useState } from 'react';
import MainIcon from '../icons/main-icon/MainIcon';
import MainButton from '../UI/buttons/main-button/MainButton';
import styles from './Header.module.css';
import MenuIcon from '@/components/icons/menu-icon/MenuIcon';
import Menu from '@/components/menu/Menu';

export const navLinks: INavLink[] = [
  { route: '/leasing', title: 'Лизинг' },
  { route: '/catalog', title: 'Каталог' },
  { route: '/about-us', title: 'О нас' },
];

const Header = () => {
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
                <li className={styles.navItem} key={navLink.route}>
                  <Link className={styles.navItemLink} href={navLink.route}>
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MainButton buttonStyle="outline" onClick={() => {}}>
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
        {showSidebar && <Menu onClick={() => setShowSidebar(false)} />}
      </div>
    </header>
  );
};

export default Header;
