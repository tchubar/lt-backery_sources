import React, {useState, useRef} from 'react';

import styles from './Popular.module.scss';

import Slider from '../Slider';

import importImagesFromFolder from '../../utils/importImagesFromFolder';



export default function Popular({ size }) {

  const slideRef = useRef(null);

  const breakpoints = {
    1800: 300,
    980: 214,
    688: 526,
    0: 280
  };

  const slides = Object.entries(
    importImagesFromFolder(
      require.context('../../img/popular', false, /\.(png|jpe?g|svg)$/)
    )).map((el, i) => (
      // <div className={styles.Item}>
        <img
          className={styles.Slide}
          ref={slideRef}
          src={el[1].default}
          alt={el[0]}
        />
      // </div>
    )
  );

  return (
      <Slider
        containerStyle={styles.Slider}
        trackStyle={styles.Slider__track}
        buttonStyle={styles.Slider__button}
        leftButtonStyle={`${styles.Slider__button} ${styles.Slider__button_prev}`}
        rightButtonStyle={`${styles.Slider__button} ${styles.Slider__button_next}`}
        size={size}
        breakpoints={breakpoints}
      >
        {
          // slides.map(el => <div ref={slideRef} className={styles.Slide}>{el}</div>)
          slides.map(el => el)
        }
    </Slider>
  );
}