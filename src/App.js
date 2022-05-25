import "./styles.css";
import styles from "./App.module.css";
import Calendar from "./Calendar";

export default function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.logo}>
            Коммандировочные <br />
            приказы
          </h4>
          <nav className={styles.nav}>
            <a className={styles.nav_link} href="#">
              Приказы
            </a>
            <a className={styles.nav_link} href="#">
              Договоры
            </a>
          </nav>
        </header>
        <aside className={styles.aside}>
          <ul className={styles.list}>
            <li className={styles.list_item}>Соколенко Роман</li>
            <li className={styles.list_item}>Самусь Дмитрий</li>
          </ul>
        </aside>
        <main className={styles.main}>
          <Calendar />
        </main>
      </div>
    </div>
  );
}
