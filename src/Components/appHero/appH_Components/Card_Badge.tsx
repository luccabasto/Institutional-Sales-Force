import React from 'react'
import { BadgeInterface } from './Card_types'
import styles from '../../../Styles/Badge.module.css'

const Card_Badge = ({text, filled}: BadgeInterface) => {
    const filledClass = filled ?
    styles.filled : ""
  return (
    <small className={`${styles.badge} uppercase ${filledClass}`}>{text}</small>
  )
}

export default Card_Badge