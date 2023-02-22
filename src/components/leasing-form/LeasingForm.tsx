import React, { useEffect, useState } from 'react';
import MainButton from '../UI/buttons/main-button/MainButton';
import PercentInput from '../UI/inputs/percent-input/PercentInput';
import SliderInput from '../UI/inputs/slider-input/SliderInput';
import CalculationOutput from '../UI/outputs/calculation-output/CalculationOutput';
import styles from './LeasingForm.module.css';

const creditPercent = 10;

const inputRanges = {
  price: { min: 1000000, max: 6000000 },
  initialPay: { min: 100000, max: 600000 },
  percent: { min: 10, max: 60 },
  duration: { min: 1, max: 60 },
};

const LeasingForm: React.FC<{ onOpen: () => void }> = (props) => {
  const [priceState, setPriceState] = useState(3300000);
  const [percentState, setPercentState] = useState(10);
  const [initialPayState, setInitialPayState] = useState(330000);
  const [initialPayMinState, setInitialMinState] = useState(100000);
  const [initialPayMaxState, setInitialMaxState] = useState(600000);
  const [durationState, setDurationState] = useState(60);
  const [overallAmountState, setOverallAmountState] = useState(0);
  const [monthPayState, setMonthPayState] = useState(0);

  useEffect(() => {
    const monthPercentDecimal = creditPercent / 12 / 100;
    const leasingBody = priceState - initialPayState;
    const leasingRatio =
      (monthPercentDecimal * Math.pow(1 + monthPercentDecimal, durationState)) /
      (Math.pow(1 + monthPercentDecimal, durationState) - 1);

    const newMonthPayState = +(leasingBody * leasingRatio).toFixed();
    const newOverallAmountState = +(
      initialPayState +
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
      setMonthPayState(newMonthPayState);
      setOverallAmountState(newOverallAmountState);
    }
  }, [priceState, initialPayState, durationState, percentState]);

  useEffect(() => {
    const newInitialPayState = +((priceState * percentState) / 100).toFixed();
    const newPercentState = +(
      (newInitialPayState / priceState) *
      100
    ).toFixed();

    setInitialPayState(newInitialPayState);
    setPercentState(newPercentState);
    setInitialMinState(
      +((priceState * inputRanges.percent.min) / 100).toFixed()
    );
    setInitialMaxState(
      +((priceState * inputRanges.percent.max) / 100).toFixed()
    );
  }, [priceState]);

  useEffect(() => {
    const newPercentState = +((initialPayState / priceState) * 100).toFixed();
    setPercentState(newPercentState);
  }, [initialPayState]);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onOpen();
  };
  return (
    <form className={styles.leasingForm} onSubmit={submitFormHandler}>
      <div className={styles.leasingFormTitle}>
        Рассчитайте стоимость автомобиля в лизинг
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <SliderInput
            minValue={inputRanges.price.min}
            maxValue={inputRanges.price.max}
            value={priceState}
            label={'Стоимость автомобиля'}
            sign={'₽'}
            handler={setPriceState}
          />
        </div>
        <div className={styles.inputWrapper}>
          <PercentInput
            minValue={initialPayMinState}
            maxValue={initialPayMaxState}
            value={initialPayState}
            percentValue={percentState}
            label={'Первоначальный взнос'}
            sign={'%'}
            handler={setInitialPayState}
          />
        </div>
        <div className={styles.inputWrapper}>
          <SliderInput
            minValue={inputRanges.duration.min}
            maxValue={inputRanges.duration.max}
            value={durationState}
            label={'Срок лизинга'}
            sign={'мес.'}
            handler={setDurationState}
          />
        </div>
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
          <div className={styles.mainButton}>
            <MainButton onClickHandler={() => {}}>Оставить заявку</MainButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LeasingForm;
