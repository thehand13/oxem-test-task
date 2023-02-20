import Head from 'next/head';
import Slider from '@/components/slider/Slider';
import LeasingForm from '@/components/leasing-form/LeasingForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leasing Car</title>
        <meta name="description" content="Leasing car service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <LeasingForm />
    </>
  );
}
