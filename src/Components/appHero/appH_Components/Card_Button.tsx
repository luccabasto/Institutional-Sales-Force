import { ButtonInterface } from './Card_types'
import styles from '../../../Styles/Button.module.css'

const Card_Button = ({text, filled, type, href, icon}: ButtonInterface) => {
    const filledClass = filled ?
    styles.filled : "";
  return (
    <a href={href} className={`${styles.btn} ${styles[type.toLowerCase()]} ${filledClass}`}>
      <span>{text}</span>
      {icon}
      
    </a>
  )
}

export default Card_Button