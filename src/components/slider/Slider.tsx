import { ISlideComponents } from '@/models/slide-components';
import React from 'react';
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
    description: 'Получите машину за 0 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто в кредит для физических лиц',
    description: 'Получите машину за 10 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 50 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    title: 'Aвто в аренду для физических лиц',
    description: 'Получите машину на 365 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
];

const Slider = () => {
  return <Slide slides={slides} />;
};

export default Slider;
