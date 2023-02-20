import { ISlideComponents } from '@/models/slide-components';
import React from 'react';
import Slide from './Slide';
import CarImage from '../../../public/images/car.jpg';

const slides: ISlideComponents[] = [
  {
    id: 0,
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 5 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    id: 1,
    title: 'Aвто не в лизинг для физических лиц',
    description: 'Получите машину за 0 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    id: 2,
    title: 'Aвто в кредит для физических лиц',
    description: 'Получите машину за 10 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    id: 3,
    title: 'Aвто в лизинг для физических лиц',
    description: 'Получите машину за 50 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    id: 4,
    title: 'Aвто в аренду для физических лиц',
    description: 'Получите машину на 365 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
  {
    id: 5,
    title: 'Aвто в аренду для физических лиц',
    description: 'Получите машину на 365 дней',
    buttonText: 'Оставить заявку',
    imageUrl: CarImage,
  },
];

const Slider: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return <Slide slides={slides} onOpen={onOpen} />;
};

export default Slider;
