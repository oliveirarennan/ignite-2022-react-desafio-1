import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './TodoForm.module.css'

interface TodoFormProps{
  createNewTask: (taskTile: string) => void
}

export function TodoForm ({createNewTask}: TodoFormProps){
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    createNewTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Você precisa nomear a sua tarefa .')
  }

  const isNewTaskTextEmpty = newTaskText.length === 0

  return (
    <form className={styles.TodoForm} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTodoChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit" disabled={isNewTaskTextEmpty}>Criar <PlusCircle size={16}/></button>
    </form>
  )
}