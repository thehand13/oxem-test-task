import React from 'react';
import styles from './MainButton.module.css';

type ButtonStyle = 'primary' | 'secondary' | 'outline';

const MainButton: React.FC<{
  children: React.ReactNode;
  handleOpenPopup: () => void;
  buttonStyle?: ButtonStyle;
}> = ({ handleOpenPopup, buttonStyle, children }) => {
  return (
    <button
      onClick={handleOpenPopup}
      className={`${styles.mainButton} ${styles[buttonStyle || 'primary']}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
