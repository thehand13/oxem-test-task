import Image from 'next/image';
import { ISlideComponents } from '@/models/slide-components';
import React from 'react';
import MainButton from '../UI/buttons/main-button/MainButton';
import styles from './Slide.module.css';
import SliderCard from '../UI/cards/slider-card/SliderCard';

const Slide: React.FC<ISlideComponents> = (props) => {
  return (
    <SliderCard>
      <div className={styles.imageContainer}>
        <Image src={props.imageUrl} alt={props.title} fill />
      </div>
      <h1 className={styles.slideTitle}>{props.title}</h1>
      <p className={styles.slideDescription}>{props.description}</p>
      <MainButton buttonColor={'firstUIButton'}>{props.buttonText}</MainButton>
      <button className={styles.navButton}></button>
      <button className={styles.navButton}></button>
    </SliderCard>
  );
};
export default Slide;
