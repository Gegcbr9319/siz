import { FC, useState, useEffect } from "react";
import styles from "./Table.module.scss";

interface ITable {
  name: string;
}

export const Table: FC<ITable> = ({ name }) => {
  const [main, setMain] = useState(false);
  const [eng, setEng] = useState(false);
  const [engHight, setEngHight] = useState(false);

  const jobSetup = () => {
    if (name === "устинков" || name === "боровой") {
      setMain(true);
      setEng(false);
      setEngHight(false);
    } else if (name === "калуженов") {
      setEngHight(true);
      setEng(false);
      setMain(false);
    } else {
      setEng(true);
      setEngHight(false);
      setMain(false);
    }
  };

  useEffect(() => {
    jobSetup();
  }, []);

  return (
    <table className={styles.table}>
      <tbody className={styles.tableRow}>
        <tr>
          <th className={styles.tableLane}>
            Наименование средства индивидуальной защиты
          </th>
          <th className={styles.tableLane}>
            Классификация средств индивидуальной защиты по защитным свойствам
          </th>
          <th className={styles.tableLane}>Единица измерения</th>
          <th className={styles.tableLane}>Количество</th>
          <th className={styles.tableLane}>Срок носки</th>
        </tr>
      </tbody>
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>
            Руковицы комбинированные (перчатки трикотажные)
          </td>
          <td className={styles.tableLane}>Ми</td>
          <td className={styles.tableLane}>Пар</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>До износа</td>
        </tr>
      </tbody>
      {!main && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>Головной убор из хб ткани</td>
            <td className={styles.tableLane}></td>
            <td className={styles.tableLane}>Шт</td>
            <td className={styles.tableLane}>1</td>
            <td className={styles.tableLane}>24</td>
          </tr>
        </tbody>
      )}
      {!main && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>Наушники противошумные</td>
            <td className={styles.tableLane}></td>
            <td className={styles.tableLane}>Пар</td>
            <td className={styles.tableLane}>1</td>
            <td className={styles.tableLane}>До износа</td>
          </tr>
        </tbody>
      )}
      {!main && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>Очки дежурные</td>
            <td className={styles.tableLane}>О</td>
            <td className={styles.tableLane}>Шт</td>
            <td className={styles.tableLane}>1</td>
            <td className={styles.tableLane}>До износа</td>
          </tr>
        </tbody>
      )}
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>Костюм хлопчатобумажный</td>
          <td className={styles.tableLane}>ЗМи</td>
          <td className={styles.tableLane}>ШТ</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>24</td>
        </tr>
      </tbody>
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>Каска защитная</td>
          <td className={styles.tableLane}></td>
          <td className={styles.tableLane}>ШТ</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>24</td>
        </tr>
      </tbody>
      {engHight && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>
              Пояс предохранительный лямочный дежурный
            </td>
            <td className={styles.tableLane}>Да</td>
            <td className={styles.tableLane}>Шт</td>
            <td className={styles.tableLane}></td>
            <td className={styles.tableLane}>До износа</td>
          </tr>
        </tbody>
      )}
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>Ботинки кожанные</td>
          <td className={styles.tableLane}>Мун25</td>
          <td className={styles.tableLane}>Пар</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>24</td>
        </tr>
      </tbody>
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>Сапоги резиновые</td>
          <td className={styles.tableLane}>В</td>
          <td className={styles.tableLane}>Пар</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>До износа</td>
        </tr>
      </tbody>

      {main && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>
              Куртка хлопчатобумажная на утепляющей прокладке - дежурная
            </td>
            <td className={styles.tableLane}>Тн</td>
            <td className={styles.tableLane}>Шт</td>
            <td className={styles.tableLane}>1</td>
            <td className={styles.tableLane}>До износа</td>
          </tr>
        </tbody>
      )}
      {!main && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>
              Куртка хлопчатобумажная на утепляющей прокладке
            </td>
            <td className={styles.tableLane}>Тн</td>
            <td className={styles.tableLane}>Шт</td>
            <td className={styles.tableLane}>1</td>
            <td className={styles.tableLane}>36</td>
          </tr>
        </tbody>
      )}
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>Подшлемник зимний</td>
          <td className={styles.tableLane}></td>
          <td className={styles.tableLane}>Шт</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>24</td>
        </tr>
      </tbody>
      {!main && (
        <tbody className={styles.tableRow}>
          <tr>
            <td className={styles.tableLane}>Сапоги утепленные</td>
            <td className={styles.tableLane}>Тн 20</td>
            <td className={styles.tableLane}>Пар</td>
            <td className={styles.tableLane}>1</td>
            <td className={styles.tableLane}>36</td>
          </tr>
        </tbody>
      )}
      <tbody className={styles.tableRow}>
        <tr>
          <td className={styles.tableLane}>
            Плащ непромокаемый с капюшоном-дежурный
          </td>
          <td className={styles.tableLane}>ВН</td>
          <td className={styles.tableLane}>Шт</td>
          <td className={styles.tableLane}>1</td>
          <td className={styles.tableLane}>До износа</td>
        </tr>
      </tbody>
    </table>
  );
};
