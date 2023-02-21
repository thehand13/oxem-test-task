import Head from 'next/head';
import Slider from '@/components/slider/Slider';
import LeasingForm from '@/components/leasing-form/LeasingForm';
import ApplicationPopup from '@/components/application-popup/ApplicationPopup';
import { useState } from 'react';
import Header from '@/components/header/Header';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Head>
        <title>Leasing Car</title>
        <meta name="description" content="Leasing car service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onOpen={() => setShowPopup(true)} />
      <main>
        <Slider onOpen={() => setShowPopup(true)} />
        <LeasingForm onOpen={() => setShowPopup(true)} />
        {showPopup && (
          <ApplicationPopup
            onClose={() => setShowPopup(false)}
            onSubmit={() => {}}
          />
        )}
      </main>
    </>
  );
}
