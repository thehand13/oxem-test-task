import React from 'react';
import styles from './MainButton.module.css';

type ButtonStyle = 'primary'|'secondary'|'outline'

const MainButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  buttonStyle?: ButtonStyle;
}> = ({onClick, buttonStyle, children}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.mainButton} ${styles[buttonStyle || 'primary']}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
