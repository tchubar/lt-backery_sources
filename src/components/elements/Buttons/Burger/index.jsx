import { ReactComponent as BurgerButton } from "../../../../icons/burger.svg"

import styles from './BurgerMenuButton.module.scss'

export default function BurgerMenuButton (props) {
  return (
    <BurgerButton onClick={() => props.setShowMenuModal(1)} className={styles.BurgerMenu}/>
  )
}