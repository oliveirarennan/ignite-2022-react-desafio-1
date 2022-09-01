import './global.css'
import  styles from './App.module.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { Tasks } from './components/Tasks'

function App() {

  return (
    <>
    <Header />
    <div className={styles.App}>
      <TodoForm />
      <Tasks />
    
    </div>
    </>
  )
}

export default App
