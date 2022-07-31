import React from 'react'

import styles from './Header.module.css'

import sociallogo from '../../assets/logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={sociallogo} alt="Social feed logo" />
    </div>
  )
}
