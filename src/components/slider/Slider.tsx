import { ISlideComponents } from '@/models/slide-components';
import React, { useEffect, useState } from 'react';
import Slide from './Slide';
import CarImage from '../../../public/images/car.jpg';

const slides: ISlideComponents[] = [
  {
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 5 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто не в лизинг для физических лиц',
    description: 'Получите машину за 5 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 5 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 5 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 5 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Slide
      title={slides[slideIndex].title}
      description={slides[slideIndex].description}
      buttonText={slides[slideIndex].buttonText}
      imageUrl={slides[slideIndex].imageUrl}
    />
  );
};

export default Slider;
