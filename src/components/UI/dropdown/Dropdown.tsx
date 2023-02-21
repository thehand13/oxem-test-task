import React from 'react';
import styles from './Input.module.css';

const Input: React.FC<{
  value: string;
  type?: string;
  placeholder?: string;
  onInput: (str: string) => void;
}> = ({ value, placeholder, type, onInput }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        onChange={(e) => onInput(e.target.value)}
        value={value}
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
