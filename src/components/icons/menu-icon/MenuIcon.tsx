import React from 'react';
import styles from './MenuIcon.module.css';

const MenuIcon = () => {
  return (
    <svg
      className={styles.menuIcon}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3304)">
        <path
          d="M5.33331 8H26.6666"
          stroke="black"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33331 16H26.6666"
          stroke="black"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33331 24H21.3333"
          stroke="black"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3304">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;
