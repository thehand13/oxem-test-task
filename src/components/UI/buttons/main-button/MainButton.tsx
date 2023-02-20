import React from 'react';
import styles from './MainButton.module.css';

type ButtonStyleNumber = 0 | 1 | 2;

const buttonStyles: string[] = [
  styles.styleOne,
  styles.styleTwo,
  styles.styleThree,
];

const MainButton: React.FC<{
  children: React.ReactNode;
  eventHandler: () => void;
  buttonStyle: ButtonStyleNumber;
}> = (props) => {
  return (
    <button
      onClick={props.eventHandler}
      className={`${styles.mainButton} ${buttonStyles[props.buttonStyle]}`}
    >
      {props.children}
    </button>
  );
};

export default MainButton;
