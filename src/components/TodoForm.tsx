import {PlusCircle} from 'phosphor-react'

import styles from './TodoForm.module.css'

export function TodoForm (){
  return (
    <form className={styles.TodoForm} action="">
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="submit">Criar <PlusCircle size={16}/></button>
    </form>
  )
}