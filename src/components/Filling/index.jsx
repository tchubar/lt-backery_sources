import React, { useEffect, useRef, useState } from 'react';

import Slider from '../Slider';

import importImagesFromFolder from '../../utils/importImagesFromFolder';

import styles from './Filling.module.scss';

const names = {
  'carrot_cream-cheese': 'Морковный и крем-чиз',
  'cherry_cream': 'Вишневый пломбир',
  'choko_cherry': 'Шоколад и вишня',
  'cream_and_peach': 'Сливочный с персиками',
  'cream-cheese_and_raspberry': 'Крем-чиз и малина',
  'mango_choco_raspberry': 'Манго-шоколад-малина',
  'pistachio_raspberry': 'Фисташка и малина',
  'raspberry_caramel': 'Малина и карамель',
  'raspberry_rafaello': 'Малиновое рафаэлло',
  'snickers': 'Сникерс',
  'spiced cherry': 'Пряная вишня',
  'strawberry_cream': 'Клубничный пломбир',
}

function chunks(arr, size = 2) {
  return arr.map((x, i) => i % size == 0 && arr.slice(i, i + size)).filter(x => x)
}

const importedObjects = Object.entries(
  importImagesFromFolder(
    require.context('../../img/filling', false, /\.(png|jpe?g|svg)$/)
  )
).map(el => (
  <div className={styles.Item}>
    <img
      className={styles.Item__image}
      src={el[1].default}
      alt={el[0]} />
    <h3 className={styles.Item__title}>{names[el[0].split('.')[0]]}</h3>
  </div>
));

const slides = chunks(importedObjects, 3);

export default function Filling({size}) {

  const slideRef = useRef(null);

  const breakpoints = {0:0};

  return (
    <div className={styles.Filling} id="filling">
      <h1 className={styles.Filling__title}>Начинки</h1>
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
          size.width >= 980
            ? slides.map(el => (
              <div ref={slideRef} className={styles.Slide}>{el}</div>)
            )
            : importedObjects.map(el => (
              <div ref={slideRef} className={styles.Slide}>{el}</div>)
            )
        }
      </Slider>
    </div>
  );
}
