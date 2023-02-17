import Link from 'next/link';
import React from 'react';
import MainButton from '../UI/buttons/main-button/MainButton';

const Header = () => {
  return (
    <header>
      <h1>Leasing Car</h1>
      <nav>
        <ul>
          <li>
            <Link href="/leasing">Лизинг</Link>
          </li>
          <li>
            <Link href="/catalog">Каталог</Link>
          </li>
          <li>
            <Link href="/about-us">О нас</Link>
          </li>
        </ul>
      </nav>
      <MainButton buttonColor={'second'}>Оставить заявку</MainButton>
    </header>
  );
};

export default Header;
