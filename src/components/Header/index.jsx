import React from 'react';

import RoundButtonsBar from '../elements/Buttons/RoundButtonsBar';
import InfoBlock from '../elements/InfoBlock';
import BurgerMenuButton from '../elements/Buttons/Burger';

import styles from './Header.module.scss';

export default function Header({ setShowMenuModal }) {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__logo} />
      <InfoBlock
        type="phones"
        value={['8 (921) 257 57 48', '8 (921) 572 75 00']}
      />
      <RoundButtonsBar />
      <BurgerMenuButton setShowMenuModal={(state) => setShowMenuModal(state)} />
    </div>
  );
}
