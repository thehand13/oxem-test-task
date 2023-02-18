import React from 'react';
import styles from './CalculationOutput.module.css';

const CalculationOutput: React.FC<{
  outputValue: number;
  label: string;
}> = (props) => {
  return (
    <div className={styles.calculationOutput}>
      <label className={styles.calculationLabel} htmlFor={props.label}>
        {props.label}
      </label>
      <div className={styles.calculationValue}>{props.outputValue} ₽</div>
    </div>
  );
};

export default CalculationOutput;
