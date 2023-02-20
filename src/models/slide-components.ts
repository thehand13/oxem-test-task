import { StaticImageData } from 'next/image';

export interface ISlideComponents {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: StaticImageData;
}
