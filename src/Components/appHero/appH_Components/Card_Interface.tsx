import { CardInterface } from './Card_types'
import styles from '../../../Styles/CardInter.module.css'
import Card_Badge from './Card_Badge'
import Card_Button from './Card_Button'


const Card_Interface = ({body,btn, title,badge,image,indicator, subtitle}: CardInterface) => {
  return (
   <article className={`stack-lg ${styles.card}`}>
    {indicator && 
        <small className={styles.indicator}> {indicator}
        </small>
    }
    {badge && 
    <Card_Badge text={badge.text} filled={badge.filled}/>
    }
    {image &&
        <img src={image} alt='Imagem aleatória de teste' className={styles.image} />
    }
    <div className='stack-sm'>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>
        }
    </div>
    <p className={styles.body}>{body}</p>
    <Card_Button 
    filled={btn.filled} type={btn.type} 
    text={btn.text} href={btn.href} icon={btn.icon} />
   </article>
  )
}

export default Card_Interface