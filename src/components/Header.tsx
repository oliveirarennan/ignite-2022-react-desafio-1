import logo from '../assets/logo.svg'

import styles from './Header.module.css'

export function Header(){
  return (
    <header className={styles.Header}>
      <img src={logo} alt="Logo ToDo List App" />
    </header>
  )
}