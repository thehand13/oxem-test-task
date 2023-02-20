import React from 'react';
import styles from './NavButton.module.css';

const NavButton: React.FC<{
  children: React.ReactNode;
  eventHandler: () => void;
}> = (props) => {
  return (
    <button onClick={props.eventHandler} className={styles.navButton}>
      {props.children}
    </button>
  );
};

export default NavButton;
