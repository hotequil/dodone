import React from 'react';
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src="./logo192.png" alt="Dodone logo" />
        <h1 className={styles.title}>Dodone</h1>
      </header>
      <main className={styles.main}>Test</main>
      <footer className={styles.footer}>Developed by hotequil</footer>
    </div>
  )
}

export default App;
