import styles from "./App.module.css"
import { TasksPage } from "./pages/tasks/Tasks";

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src="./logo192.png" alt="Dodone logo" />
        <h1 className={styles.title} translate="no">Dodone</h1>
      </header>
      <main className={styles.main}>
        <TasksPage />
      </main>
      <footer className={styles.footer}>Developed by <span translate="no">hotequil</span></footer>
    </div>
  )
}
