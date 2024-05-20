import styles from "./Watch.module.scss";

export const Watch = () => {
  const currentDate = new Date();
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  return (
    <div>
      <p className={styles.date}>Данные на {date.toLocaleDateString()}</p>
    </div>
  );
};
