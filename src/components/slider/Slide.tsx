import Image from 'next/image';
import { ISlideComponents } from '@/models/slide-components';
import React, { useCallback, useEffect, useState } from 'react';
import MainButton from '../UI/buttons/main-button/MainButton';
import styles from './Slide.module.css';
import SliderCard from '../UI/cards/slider-card/SliderCard';
import NavButton from '../UI/buttons/nav-button/NavButton';
import BackwardIcon from '../icons/nav-icons/backward-icon/BackwardIcon';
import ForwardIcon from '../icons/nav-icons/forward-icon/ForwardIcon';

const Slide: React.FC<{ slides: ISlideComponents[]; onOpen: () => void }> = (
  props
) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const goToPreviousSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(() => props.slides.length - 1);
    } else {
      setSlideIndex((prevSlide) => prevSlide - 1);
    }
  };
  const goToNextSlide = useCallback(() => {
    if (slideIndex === props.slides.length - 1) {
      setSlideIndex(() => 0);
    } else {
      setSlideIndex((prevSlide) => prevSlide + 1);
    }
  }, [props.slides.length, slideIndex]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      goToNextSlide();
    }, 10000);
    return () => clearTimeout(timerId);
  }, [slideIndex, goToNextSlide]);

  return (
    <SliderCard>
      <div className={styles.imageContainer}>
        <Image
          src={props.slides[slideIndex].imageUrl}
          alt={props.slides[slideIndex].title}
          fill
        />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.slideTitle}>{props.slides[slideIndex].title}</h1>
        <p className={styles.slideDescription}>
          {props.slides[slideIndex].description}
        </p>
        <MainButton
          onClickHandler={() => {
            props.onOpen();
          }}
        >
          {props.slides[slideIndex].buttonText}
        </MainButton>
      </div>
      <div className={styles.navContainer}>
        <NavButton iconType="backward" eventHandler={goToPreviousSlide} />
        <NavButton iconType="forward" eventHandler={goToNextSlide} />
      </div>

      <div className={styles.navMenu}>
        {props.slides.map((item) => (
          <div
            key={item.id}
            className={`${styles.navMenuButton} ${
              item.id === slideIndex && styles.navMenuButtonCurrent
            }`}
            onClick={() => {
              setSlideIndex(item.id);
            }}
          ></div>
        ))}
      </div>
    </SliderCard>
  );
};
export default Slide;
