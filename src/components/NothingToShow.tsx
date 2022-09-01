import Clipboard from '../assets/Clipboard.svg' 

import styles from './NothingToShow.module.css'

export function NothingToShow(){
  return (
    <div className={styles.NothingToShow}>
      <img src={Clipboard} alt="Imagem indicando que não tem tarefas" />

      <p className={styles.texts}>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}