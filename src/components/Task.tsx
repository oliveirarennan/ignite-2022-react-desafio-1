import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export interface TaskProps{
  id: number
  title: string
  done?: boolean
  toggleTaskDone?:  (taskId: number) => void
  deleteTask?: (id: number) => void
}

export function Task({id, title, done = false, toggleTaskDone, deleteTask}: TaskProps){

  function handleDeleteTask(){
    deleteTask!(id)
  }

  function handleToggleTaskDone(){
    toggleTaskDone!(id)
  }

  return (
    <article className={styles.Task}>
      <div>
        <input type="checkbox" id={`task-check-${id}`} checked={done} onChange={handleToggleTaskDone}/>
        <label htmlFor={`task-check-${id}`}>
          {title}
        </label>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={16}/>
      </button>
    </article>
  )
}