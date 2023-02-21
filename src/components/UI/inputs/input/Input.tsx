import React from 'react';
import styles from './Input.module.css';
import InputMask, { Props } from 'react-input-mask';

const Input: React.FC<{
  value: string;
  type?: string;
  placeholder?: string;
  onInput: (str: string) => void;
  disabled?: boolean;
}> = ({ value, placeholder, type, onInput, disabled }) => {
  return (
    <div>
      {type === 'tel' ? (
        <div
          className={`${styles.inputContainer} ${
            disabled && styles.inputContainerDisabled
          }`}
        >
          <InputMask
            mask="+7 (999) 999 99 99"
            value={value}
            onChange={(e) => onInput(e.target.value)}
          >
            {
              // @ts-ignore
              (inputProps: Props) => (
                <input
                  className={styles.customInput}
                  placeholder={placeholder}
                  {...inputProps}
                  type="tel"
                />
              )
            }
          </InputMask>
          <span className={styles.inputPlaceholder}>{placeholder}</span>
        </div>
      ) : (
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => onInput(e.target.value)}
            value={value}
            className={styles.customInput}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
          />
          <span className={styles.inputPlaceholder}>{placeholder}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
