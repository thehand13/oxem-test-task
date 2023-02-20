import React from 'react';
import CarIcon from './CarIcon';
import LeasingIcon from './LeasingIcon';
import styles from './MainIcon.module.css';

const MainIcon = () => {
  return (
    <div className={styles.mainIcon}>
      <LeasingIcon />
      <CarIcon />
    </div>
  );
};

export default MainIcon;
