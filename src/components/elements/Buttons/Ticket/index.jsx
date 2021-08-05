import styles from './TicketButton.module.scss';

//TODO: Сделать якорь

export default function TicketButton({type, className, value}) {
  return (
    <button
      type={type || "button"}
      className={`${styles.TicketButton} ${className}`}
    >{value}</button>
  );
}