import styles from "./App.module.scss";
import { Cards, Sheets, Watch } from "..";

export const App = () => {
  return (
    <>
      <div className={styles.main_div}>
        <h2 className={styles.h2}> Страница контроля состояния СИЗ</h2>
        <Sheets />
        <Cards />
        <Watch />
      </div>
    </>
  );
};
