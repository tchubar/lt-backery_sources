import React, { useState, useEffect, useRef } from 'react';

import TabButton from '../elements/Buttons/Tab';

import styles from './Assortment.module.scss';
import importImagesFromFolder from '../../utils/importImagesFromFolder';

/* //! require.context не может работать с переменными, поэтому так.
 * https://stackoverflow.com/questions/45327765/pass-a-variable-to-require-context
 * https://github.com/webpack/webpack/issues/4772
 */

const TABS = {
  wedding: {
    name: 'Свадебные торты',
    context: require.context('../../img/wedding', false, /\.(png|jpe?g)$/),
  },
  child: {
    name: 'Детские торты',
    context: require.context('../../img/child', false, /\.(png|jpe?g)$/),
  },
  popular: {
    name: 'Популярные торты',
    context: require.context('../../img/popular', false, /\.(png|jpe?g)$/),
  },
  extraordinary: {
    name: 'Необычной формы',
    context: require.context('../../img/extraordinary', false, /\.(png|jpe?g)$/),
  },
  cupcakes: {
    name: 'Капкейки',
    context: require.context('../../img/cupcakes', false, /\.(png|jpe?g)$/),
  },
};
export default function Assortment({tabName, selectedTab, setSelectedTab}) {
  // const [selectedTab, setSelectedTab] = useState(tabName || 'popular');
  const tabsBarRef = useRef(null);

  useEffect(() => {
    if (tabsBarRef && tabsBarRef.current) {
      tabsBarRef.current.addEventListener('wheel', function (event) {
        let modifier;
        if (event.deltaMode == event.DOM_DELTA_PIXEL) {
          modifier = 1;
          // иные режимы возможны в Firefox
        } else if (event.deltaMode == event.DOM_DELTA_LINE) {
          modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
          modifier = this.clientHeight;
        }
        if (event.deltaY != 0) {
          // замена вертикальной прокрутки горизонтальной
          this.scrollLeft += modifier * event.deltaY;
          event.preventDefault();
        }
      });
    }
  }, []);
  return (
    <div
      className={styles.Assortment}
      id='assortment'
    >
      <h1 className={styles.Assortment__title}>Ассортимент</h1>
      <h3 className={styles.Assortment__subtitle}>Оформление индивидуальное</h3>
      <nav ref={tabsBarRef} className={styles.Tabs}>
        <div className={styles.Viewbox}>
          {Object.entries(TABS).map((el) => (
            <TabButton
              className={`${styles.Tabs__button} ${selectedTab === el[0] ? styles.active : ''}`}
              value={el[1].name}
              setSelectedTab={() => setSelectedTab(el[0])}
            />
          ))}
        </div>
      </nav>
      <div className={styles.Gallery}>
        {
            Object.entries(
              importImagesFromFolder(TABS[selectedTab].context),
            ).map((el) => (
              <img
                // key={key}
                src={el[1].default}
                alt=""
              />
            ))
          }
      </div>
    </div>
  );
}
