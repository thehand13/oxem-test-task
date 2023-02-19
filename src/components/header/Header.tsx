import { INavLink } from '@/models/nav-link';
import Link from 'next/link';
import React from 'react';
import MainIcon from '../icons/MainIcon';
import MainButton from '../UI/buttons/main-button/MainButton';
import styles from './Header.module.css';

const navLinks: INavLink[] = [
  { route: '/leasing', title: 'Лизинг' },
  { route: '/catalog', title: 'Каталог' },
  { route: '/about-us', title: 'О нас' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <MainIcon />
      <div className={styles.company}>ЛИЗИНГОВАЯ КОМПАНИЯ</div>
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
      <MainButton buttonColor={'firstUIButton'}>Оставить заявку</MainButton>
    </header>
  );
};

export default Header;
