import React, { useState } from 'react';
import MainButton from '@/components/UI/buttons/main-button/MainButton';
import styles from './ApplicationPopup.module.css';
import Input from '@/components/UI/inputs/input/Input';
import CloseIcon from '@/components/icons/close-icon/Close';
import WhatsUpIcon from '../icons/social-icons/whatsup-icon/WhatsUpIcon';
import TelegramIcon from '../icons/social-icons/telegram-icon/TelegramIcon';

type PopupProps = {
  onClose: () => void;
  onSubmit: () => void;
};

const ApplicationPopup = ({ onClose, onSubmit }: PopupProps) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div>
          <div onClick={onClose} className={styles.closeButton}>
            <CloseIcon />
          </div>
          <h3 className={styles.popupTitle}>Онлайн-заявка</h3>
          <div className={styles.popupDescription}>
            Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все
            вопросы
          </div>
          <div className={styles.popupForm}>
            <Input
              value={phone}
              onInput={(phone) => setPhone(phone)}
              placeholder="Телефон"
              type="phone"
            />
            <Input
              value={name}
              onInput={(name) => setName(name)}
              placeholder="Имя"
            />
          </div>
          <div className={styles.popupCard}>
            <div className={styles.popupAgreement}>
              Нажимая на кнопку «Оставить заявку», я даю согласие{' '}
              <span>на обработку персональных данных</span>
            </div>
            <MainButton onClick={onSubmit}>Оставить заявку</MainButton>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <WhatsUpIcon />
            </div>
            <div className={styles.iconWrapper}>
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPopup;
