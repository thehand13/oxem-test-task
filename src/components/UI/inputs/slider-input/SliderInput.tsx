import React from 'react';
import styles from './SliderInput.module.css';

const SliderInput: React.FC<{
  minValue: number;
  maxValue: number;
  value: number;
  label: string;
  sign: string;
  handler: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
  const onChangeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handler(+event.target.value);
  };
  return (
    <div className={styles.sliderInput}>
      <label htmlFor={props.label} className={styles.sliderLabel}>
        {props.label}
      </label>
      <input
        onChange={onChangeValueHandler}
        value={props.value}
        name={props.label}
        className={styles.sliderNumber}
        min={props.minValue}
        max={props.maxValue}
        type="number"
      />
      <div className={styles.sliderSign}>{props.sign}</div>
      <input
        onChange={onChangeValueHandler}
        value={props.value}
        name={props.label}
        className={styles.sliderRange}
        min={props.minValue}
        max={props.maxValue}
        type="range"
      />
    </div>
  );
};

export default SliderInput;
