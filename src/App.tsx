import styles from "./App.module.css"
import { Section } from "./components/section/Section";

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src="./logo192.png" alt="Dodone logo" />
        <h1 className={styles.title}>Dodone</h1>
      </header>
      <main className={styles.main}>
        <Section title="New task">Test</Section>
        <Section title="Task list">Test</Section>
      </main>
      <footer className={styles.footer}>Developed by hotequil</footer>
    </div>
  )
}
