import s from './Modal.module.scss';

export default function Modal (props) {
  return (
    <div onClick={() => props.setShowMenuModal(0)} className={s.ModalShadow}>
      <div className={s.Modal}>
        {props.children}
      </div>
    </div>
  );
}