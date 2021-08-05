import styles from './FooterBlock.module.scss';

export default function FooterBlock ({title, children}) {
  return (
    <div className={styles.FooterBlock}>
      <h3 className={styles.FooterBlock__title}>{title}</h3>
      {children}
    </div>
  );
}