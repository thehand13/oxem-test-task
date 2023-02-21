import BackwardIcon from '@/components/icons/nav-icons/backward-icon/BackwardIcon';
import ForwardIcon from '@/components/icons/nav-icons/forward-icon/ForwardIcon';
import React from 'react';
import styles from './NavButton.module.css';

type IconType = 'forward' | 'backward';

const NavButton: React.FC<{
  eventHandler: () => void;
  iconType: IconType;
}> = (props) => {
  let icon;
  if (props.iconType === 'forward') {
    icon = <ForwardIcon />;
  } else if (props.iconType === 'backward') {
    icon = <BackwardIcon />;
  }

  return (
    <button
      onClick={props.eventHandler}
      className={`${styles.navButton} ${styles[props.iconType || 'forward']}`}
    >
      {icon}
    </button>
  );
};

export default NavButton;
