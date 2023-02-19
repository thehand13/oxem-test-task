import React, { FormEvent, useEffect, useState } from 'react';
import MainButton from '../UI/buttons/main-button/MainButton';
import SliderInput from '../UI/inputs/slider-input/SliderInput';
import CalculationOutput from '../UI/outputs/calculation-output/CalculationOutput';
import styles from './LeasingForm.module.css';

const LeasingForm = () => {
  const [priceState, setPriceState] = useState(3300000);
  const [percentState, setPercentState] = useState(10);
  const [durationState, setDurationState] = useState(60);
  const [overallAmountState, setOverallAmountState] = useState(0);
  const [monthPayState, setMonthPayState] = useState(0);

  useEffect(() => {
    const decimalPercent = percentState / 100;
    const newMonthPayState = +(
      priceState -
      priceState *
        decimalPercent *
        (percentState / (1 + percentState) - durationState - 1)
    ).toFixed();
    const newOverallAmountState = +(
      priceState * decimalPercent +
      durationState * newMonthPayState
    ).toFixed();
    setMonthPayState(newMonthPayState);
    setOverallAmountState(newOverallAmountState);
  }, [priceState, percentState, durationState]);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className={styles.leasingForm} onSubmit={submitFormHandler}>
      <div className={styles.leasingFormTitle}>
        Рассчитайте стоимость автомобиля в лизинг
      </div>
      <div className={styles.inputContainer}>
        <SliderInput
          minValue={1000000}
          maxValue={6000000}
          value={priceState}
          label={'Стоимость автомобиля'}
          sign={'₽'}
          handler={setPriceState}
        />
        <SliderInput
          minValue={10}
          maxValue={60}
          value={percentState}
          label={'Первоначальный взнос'}
          sign={'10%'}
          handler={setPercentState}
        />
        <SliderInput
          minValue={1}
          maxValue={60}
          value={durationState}
          label={'Срок лизинга'}
          sign={'мес.'}
          handler={setDurationState}
        />
      </div>
      <div className={styles.outputContainer}>
        <CalculationOutput
          outputValue={overallAmountState}
          label={'Сумма договора лизинга'}
        />
        <CalculationOutput
          outputValue={monthPayState}
          label={'Ежемесячный платёж от'}
        />
        <MainButton buttonColor={'firstUIButton'}>Оставить заявку</MainButton>
      </div>
    </form>
  );
};

export default LeasingForm;
