import React from 'react';

import RoundButtonsBar from '../elements/Buttons/RoundButtonsBar';
import FooterBlock from '../elements/Footer/Block';
import InfoBlock from '../elements/InfoBlock';

import styles from './Footer.module.scss';
import roundButtonStyles from '../elements/Buttons/RoundButtonsBar.module.scss';
import infoStyles from '../elements/InfoBlock.module.scss';
// import footerBlockStyles from '../elements/Footer/Block/FooterBlock.module.scss';

export default function Footer() {
  const footerContent = [
    {
      title: 'Подписывайтесь',
      value: <RoundButtonsBar
        className={`${infoStyles.InfoBlock_footer} ${roundButtonStyles.Bar_footer}`}
      />,
    }, {
      title: 'Звоните',
      value: <InfoBlock
        value={['8 (921) 257 57 48', '8 (921) 572 75 00']}
        className={infoStyles.InfoBlock_footer}
      />,
    }, {
      title: 'Ежедневно',
      value: <InfoBlock
        value={['9:00-20:00']}
        className={infoStyles.InfoBlock_footer}
      />,
    }, {
      title: 'Пишите',
      value: <InfoBlock
        value={['lt_bakery@gmail.com']}
        className={infoStyles.InfoBlock_footer}
      />,
    },
  ];

  return (
    <div className={styles.Footer}>
      {footerContent.map((el) => (
        <FooterBlock className={styles.FooterBlock} title={el.title}>
          {el.value}
        </FooterBlock>
      ))}
    </div>
  );
}
