import React from 'react';

import Navbar from '../Navbar';
import TicketButton from '../elements/Buttons/Ticket';

import styles from './Main.module.scss';

export default function Main({ size, menu, setSelectedTab, selectedTab}) {
  function returnText() {
    if (size.width > 1280) {
      return (
        <p className={styles.Ad__text}>
          Воплощаем идеи любой сложности. Создаем эксклюзивные свадебные торты,
          <br />
          детские торты с любимыми героями мультфильмов и не только, а наши начинки
          <br />
          не оставят никого равнодушными. Оставьте заявку, и мы вам перезвоним для
          <br />
          уточнения деталей заказа.
        </p>
      );
    } if (size.width > 688) {
      return (
        <p className={styles.Ad__text}>
          Воплощаем идеи любой сложности. Создаем эксклюзивные свадебные
          <br />
          торты, детские торты с любимыми героями мультфильмов и не только,
          <br />
          а наши начинки не оставят никого равнодушными. Оставьте заявку,
          <br />
          и мы вам перезвоним для уточнения деталей заказа.
        </p>
      );
    } if (size.width > 0) {
      return (
        <p className={styles.Ad__text}>
          Воплощаем идеи любой сложности. Создаем
          <br />
          эксклюзивные свадебные торты, детские торты
          <br />
          с любимыми героями мультфильмов и не только,
          <br />
          а наши начинки не оставят никого равнодушными.
          <br />
          Оставьте заявку, и мы вам перезвоним для уточнения
          <br />
          деталей заказа.
        </p>
      );
    }

    return '';
  }

  return (
    <div className={styles.Main}>
      <Navbar menu={menu} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className={styles.Ad}>
        <h1 className={styles.Ad__title}>
          Авторские торты на заказ
          <br />
          <span>от 1700р/кг</span>
        </h1>
        <h3 className={styles.Ad__info}>Доставка бесплатная</h3>
        { returnText() }
        <TicketButton className={styles.Ad__TicketButton} value="Оставить заявку" />
      </div>
      <div className={styles.Cake} />

    </div>
  );
}
