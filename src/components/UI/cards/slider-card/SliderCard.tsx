import React from 'react';
import styles from './SliderCard.module.css';

const SliderCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section className={styles.sliderSection}>{props.children}</section>;
};

export default SliderCard;
