import React from 'react';
import styles from './MainButton.module.css';

type ButtonColor = 'firstUIButton' | 'secondUIButton' | 'thirdUIButton';

const MainButton: React.FC<{
  children: React.ReactNode;
  buttonColor: ButtonColor;
}> = (props) => {
  return (
    <button className={`${styles.mainButton} ${props.buttonColor}`}>
      {props.children}
    </button>
  );
};

export default MainButton;
