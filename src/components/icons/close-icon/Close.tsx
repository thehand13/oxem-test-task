import React from 'react';
import styles from './CloseIcon.module.css';

const CloseIcon = () => {
  return (
    <svg
      className={styles.closeIcon}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#F3F3F4" />
      <path
        d="M30.5996 17.4004L17.4003 30.5997"
        stroke="#828282"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4004 17.4004L30.5997 30.5997"
        stroke="#828282"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
