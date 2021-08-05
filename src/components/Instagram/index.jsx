import React from 'react';

import { ReactComponent as IconInst } from '../../icons/inst_btn.svg';

import styles from './Instagram.module.scss';
import roundButtonsStyles from '../elements/Buttons/RoundButtonsBar.module.scss';

export default function Instagram() {
  return (
    <div className={styles.Instagram}>
      <h2 className={styles.Instagram__title}>Подпишись на наш инстаграм</h2>
      <br />
      <h3 className={styles.Instagram__subtitle}>Отзывы покупателей в наших социальных сетях</h3>
      <IconInst
        className={`
          ${roundButtonsStyles.Bar__button}
          ${roundButtonsStyles.Bar__button_invert}
          ${styles.Instagram__button}
        `}
      />
    </div>
  );
}
