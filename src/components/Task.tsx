import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){
  return (
    <article className={styles.Task}>
      <div>
        <input type="checkbox" id="task-check"/>
        <label htmlFor="task-check">
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </label>
      </div>
      <button>
        <Trash size={16}/>
      </button>
    </article>
  )
}