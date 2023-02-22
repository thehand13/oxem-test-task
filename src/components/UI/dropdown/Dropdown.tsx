import React, { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import Link from 'next/link';
import { INavLink } from '@/models/nav-link';

const Dropdown: React.FC<{ navLink: INavLink }> = ({ navLink }) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const linkClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    window.location.href = navLink.route;
  };

  const linkMouseOverHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (navLink.subItems && navLink.subItems.length > 0) {
      event.preventDefault();
      setShowDropdown(true);
    }
  };

  const linkMouseLeaveHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (!(navLink.subItems && navLink.subItems.length > 0)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const clickOutsideHandler = ({ target }: MouseEvent) => {
      // @ts-ignore
      if (dropDownRef.current && !dropDownRef.current.contains(target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', clickOutsideHandler, true);
    return () => {
      document.removeEventListener('click', clickOutsideHandler, true);
    };
  }, []);

  return (
    <>
      <li
        onMouseEnter={linkMouseOverHandler}
        onMouseLeave={linkMouseLeaveHandler}
        className={`${styles.navItem} ${showDropdown && styles.navItemActive}`}
        key={navLink.route}
      >
        <Link
          className={styles.navItemLink}
          href={navLink.route}
          onClick={linkClickHandler}
        >
          {navLink.title}
        </Link>
      </li>
      {showDropdown && (
        <div className={styles.dropdown} ref={dropDownRef}>
          {navLink.subItems?.map((subItem) => (
            <Link
              key={subItem.route}
              className={styles.dropdownLink}
              href={subItem.route}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
