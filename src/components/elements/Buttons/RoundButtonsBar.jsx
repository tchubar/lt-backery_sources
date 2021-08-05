import styles from './RoundButtonsBar.module.scss'

import {ReactComponent as IconWA} from '../../../icons/wa_btn.svg'
import {ReactComponent as IconVK} from '../../../icons/vk_btn.svg'
import {ReactComponent as IconInst} from '../../../icons/inst_btn.svg'

export default function RoundButtonsBar({className}) {
  return (
    <div className={`${styles.Bar} ${className}`}>
      <IconWA className={styles.Bar__button}/>
      <IconInst className={styles.Bar__button}/>
      <IconVK onMouseOver={() => console.log(123)} className={styles.Bar__button}/>
    </div>
  )
}