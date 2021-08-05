import TicketButton from '../elements/Buttons/Ticket';
import styles from './Order.module.scss';

export default function Order(props) {
  return (
    <div className={styles.Order} id='order'>
      <div className={styles.Head}>
        <h2 className={styles.Head__title}>Как сделать заказ</h2>
        <h3 className={styles.Head__subtitle}>Заполните форму обратной связи</h3>
      </div>
      <form action="" method="post" className={styles.Form}>
        <input
          type="text"
          placeholder="Имя"
          className={styles.Form__input}/>
        <input
          type="text"
          placeholder="Фамилия"
          className={styles.Form__input}/>
        <input
          type="text"
          placeholder="Телефон"
          className={styles.Form__input}/>
        <input
          type="email"
          placeholder="Электронная почта"
          className={styles.Form__input}/>
        <input
          type="datetime-local"
          placeholder="Дата и время праздника"
          className={styles.Form__input}/>
        <textarea
          name="" id=""
          placeholder="Пожелания к оформлению"
          cols="30" rows="50"
          className={`${styles.Form__input} ${styles.Form__input_textarea}`}
        ></textarea>
        <TicketButton className={styles.Form__submit} value="Отправить заявку" type="submit" />
      </form>
    </div>
  );
}