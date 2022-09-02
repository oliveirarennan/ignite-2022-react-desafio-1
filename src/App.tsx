import  styles from './App.module.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { Tasks } from './components/Tasks'
import './global.css'
import { useState } from 'react'
import { TaskProps } from './components/Task'

const data = [
  {
    id: 1,
    title: 'Reunião com a coordenação da Pós',
    done: false
  },
  {
    id: 2,
    title: 'Compartilhar pasta e impresso no ilab',
    done: false
  },
  {
    id: 3,
    title: 'Citrix Slop',
    done: false
  },
  {
    id: 4,
    title: 'Corrigir office 365 Adolfo',
    done: true
  },
  {
    id: 5,
    title: 'Formatar pc 2DA ',
    done: true
  },
]

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(data)

  function createNewTask(newTaskTitle: string){
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle, 
      done: false
    }
    setTasks([...tasks, newTask])
  }

  function toggleTaskDone(taskId: number){
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId){
        return {...task, done: !task.done} 
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(taskId: number){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <Header />
      <div className={styles.App}>
        <TodoForm createNewTask={createNewTask}  />
        <Tasks tasks={tasks} toggleTaskDone={toggleTaskDone} deleteTask={deleteTask}/>
      
      </div>
    </>
  )
}

export default App
