import React from 'react';
import styles from './MainButton.module.css';

type ButtonStyle = 'primary' | 'secondary' | 'outline';

const MainButton: React.FC<{
  children: React.ReactNode;
  onClickHandler: () => void;
  buttonStyle?: ButtonStyle;
}> = ({ onClickHandler, buttonStyle, children }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${styles.mainButton} ${styles[buttonStyle || 'primary']}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
