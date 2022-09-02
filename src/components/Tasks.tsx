import { useReducer } from 'react'
import { NothingToShow } from './NothingToShow'
import { Task, TaskProps } from './Task'
import styles from './Tasks.module.css'


interface TasksProps {
  tasks: TaskProps[]
  toggleTaskDone: (taskId: number) => void
  deleteTask: (taskId: number) => void
}

export function Tasks({ tasks = [], deleteTask, toggleTaskDone }: TasksProps) {
  const taskQuantity = tasks.length
  const tasksDoneQuantity = tasks.reduce((acc, task) =>{
    return task.done ? acc += 1 : acc
  }, 0)

  console.log(tasksDoneQuantity)

  return (
    <div className={styles.Tasks}>
      <header>
        <div className={styles.createdTasksLabel}>Tarefas criadas <span className={styles.tasksCounter}>{taskQuantity}</span></div>
        <div className={styles.finishedTasksLabel}>Concluídas <span className={styles.tasksCounter}>{tasksDoneQuantity} de {taskQuantity}</span></div>
      </header>

      <main>
        {
          tasks.length > 0 ?
            (
              tasks.map(task => <Task key={task.id} id={task.id} title={task.title} done={task.done} deleteTask={deleteTask} toggleTaskDone={toggleTaskDone} />)
            ) :
            (
              <NothingToShow />
            )
        }

      </main>
    </div>
  )
}