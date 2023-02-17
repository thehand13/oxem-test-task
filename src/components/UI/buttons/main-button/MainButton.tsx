import React from 'react';
import classes from './MainButton.module.css';

type ButtonColor = 'first' | 'second' | 'third';

const MainButton: React.FC<{
  children: React.ReactNode;
  buttonColor: ButtonColor;
}> = (props) => {
  return (
    <button className={`${classes.mainButton} ${classes.buttonColor}`}>
      {props.children}
    </button>
  );
};

export default MainButton;
