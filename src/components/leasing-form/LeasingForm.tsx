import React, { useEffect, useState } from 'react';
import MainButton from '../UI/buttons/main-button/MainButton';
import SliderInput from '../UI/inputs/slider-input/SliderInput';
import CalculationOutput from '../UI/outputs/calculation-output/CalculationOutput';
import styles from './LeasingForm.module.css';

const creditPercent = 10;

const inputRanges = {
  price: { min: 1000000, max: 6000000 },
  percent: { min: 10, max: 60 },
  duration: { min: 1, max: 60 },
};
const LeasingForm: React.FC<{ onOpen: () => void }> = (props) => {
  const [priceState, setPriceState] = useState(3300000);
  const [percentState, setPercentState] = useState(10);
  const [initialPayState, setInitialPayState] = useState(330000);
  const [durationState, setDurationState] = useState(60);
  const [overallAmountState, setOverallAmountState] = useState(0);
  const [monthPayState, setMonthPayState] = useState(0);

  useEffect(() => {
    const newInitialPayState = +((priceState * percentState) / 100).toFixed();
    const monthPercentDecimal = creditPercent / 12 / 100;
    const leasingBody = priceState - newInitialPayState;
    const leasingRatio =
      (monthPercentDecimal * Math.pow(1 + monthPercentDecimal, durationState)) /
      (Math.pow(1 + monthPercentDecimal, durationState) - 1);

    const newMonthPayState = +(leasingBody * leasingRatio).toFixed();
    const newOverallAmountState = +(
      newInitialPayState +
      durationState * newMonthPayState
    ).toFixed();
    if (
      inputRanges.price.min <= priceState &&
      inputRanges.price.max >= priceState &&
      inputRanges.percent.min <= percentState &&
      inputRanges.percent.max >= percentState &&
      inputRanges.duration.min <= durationState &&
      inputRanges.duration.max >= durationState
    ) {
      setInitialPayState(newInitialPayState);
      setMonthPayState(newMonthPayState);
      setOverallAmountState(newOverallAmountState);
    }
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
          minValue={inputRanges.price.min}
          maxValue={inputRanges.price.max}
          value={priceState}
          label={'Стоимость автомобиля'}
          sign={'₽'}
          handler={setPriceState}
        />
        <SliderInput
          minValue={inputRanges.percent.min}
          maxValue={inputRanges.percent.max}
          value={percentState}
          label={'Первоначальный взнос'}
          sign={'%'}
          handler={setPercentState}
        />
        <SliderInput
          minValue={inputRanges.duration.min}
          maxValue={inputRanges.duration.max}
          value={durationState}
          label={'Срок лизинга'}
          sign={'мес.'}
          handler={setDurationState}
        />
      </div>
      <div className={styles.outputContainer}>
        <div className={styles.outputWrapper}>
          <CalculationOutput
            outputValue={overallAmountState}
            label={'Сумма договора лизинга'}
          />
        </div>
        <div className={styles.outputWrapper}>
          <CalculationOutput
            outputValue={monthPayState}
            label={'Ежемесячный платёж от'}
          />
        </div>
        <div className={styles.outputWrapper}>
          <MainButton
            onClick={() => {
              props.onOpen();
            }}
          >
            Оставить заявку
          </MainButton>
        </div>
      </div>
    </form>
  );
};

export default LeasingForm;
