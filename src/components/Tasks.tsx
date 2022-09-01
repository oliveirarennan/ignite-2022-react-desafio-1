import { NothingToShow } from './NothingToShow'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks(){

  return (
    <div className={styles.Tasks}>
      <header>
        <div className={styles.createdTasksLabel}>Tarefas criadas <span className={styles.tasksCounter}>5</span></div>
        <div className={styles.finishedTasksLabel}>Concluídas <span className={styles.tasksCounter}>2 de 5</span></div>
      </header>

      <main>
        {/* <NothingToShow /> */}
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </main>
    </div>
  )
}