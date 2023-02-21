import React, { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import Link from 'next/link';
import { INavLink } from '@/models/nav-link';

const Dropdown: React.FC<{ navLink: INavLink }> = ({ navLink }) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLinkClick = (e: any) => {
    if (navLink.subItems && navLink.subItems.length > 0) {
      e.preventDefault();
      setShowDropdown(true);
    } else {
      window.location.href = navLink.route;
    }
  };

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      // @ts-ignore
      if (dropDownRef.current && !dropDownRef.current.contains(target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <li
        className={`${styles.navItem} ${showDropdown && styles.navItemClicked}`}
        key={navLink.route}
      >
        <Link
          className={styles.navItemLink}
          href={navLink.route}
          onClick={handleLinkClick}
        >
          {navLink.title}
        </Link>
      </li>
      {showDropdown && (
        <div className={styles.dropdown} ref={dropDownRef}>
          {navLink.subItems?.map((subItem) => (
            <Link
              key={navLink.route}
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
