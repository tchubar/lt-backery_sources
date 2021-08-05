import styles from './InfoBlock.module.scss';

export default function InfoBlock({value, className}) {

  // Если на входе массив, то упаковываем каждое значение в свой div
  function prepareTextToRender(text) {
    if (Array.isArray(text)) {
      return text.map(el => <div key={Math.random()}>{el}</div>)
    }
    return text;
  }

  return (
    <div className={`${styles.InfoBlock} ${className}`}>
      {prepareTextToRender(value)}
    </div>
  );
}