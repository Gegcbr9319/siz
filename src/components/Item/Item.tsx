import { FC, useCallback, useEffect, useState } from "react";
import styles from "./Item.module.scss";

interface IData {
  name: string;
  value: {
    выдано: string;
    выдача: string;
    время: string;
  };
}

export const Item: FC<IData> = ({ name, value }) => {
  const path = `../../assets/imagies/${name}.png`;
  const [collorProgress, setCollorProgress] = useState("");
  const [procentDate, setProcentDate] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sizName, setSizName] = useState('');


  const setName = useCallback(() => {

    switch (name) {
      case 'glove':
        setSizName("Перчатки защитные");
        break;
      case 'glass':
        setSizName("Очки защитные");
        break;
      case 'hat':
        setSizName("Кепка");
        break;
        case 'helmet':
          setSizName("Каска защитная");
        break;
        case 'costume':
          setSizName("Костюм ХБ");
        break;
        case 'choes':
          setSizName("Ботинки защитные");
        break;
        case 'earphones':
          setSizName("Наушники защитные");
        break;
        case 'boots':
          setSizName("Сапоги резиновые");
        break;
        case 'waistband':
          setSizName("Пояс высотный");
        break;
        case 'winterHat':
          setSizName("Шапка зимняя");
        break;
        case 'winterBoots':
          setSizName("Сапоги зимние");
        break;
        case 'jacket':
          setSizName("Куртка утепленная");
        break;
        case 'cloack':
          setSizName("Плащ защитный");
        break;
      default:
        setSizName("Неизвестно");
    }
  },[name]);


  const timeCounter = useCallback(() => {
    const dateStart = Date.parse(startDate);
    const dateEnd = Date.parse(endDate);
    const currentDate = Date.now();
    const timeWithStart = currentDate - dateStart;
    const timeToEnd = dateEnd - dateStart;
    const procent = Math.round((timeWithStart * 100) / timeToEnd);

    setProcentDate(procent);
  }, [endDate, startDate]);

  const getTimeEnd = useCallback(() => {
    if (!Number.isNaN(+value.время) && !Number.isNaN(+value.выдано)) {
      const currentDate = new Date(value.выдано);
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + +value.время,
        currentDate.getDate()
      );

      setStartDate(value.выдано);
      setEndDate(endDate.toString().slice(0, 15));
      timeCounter();
    } else {
      setEndDate("До износа");
      setProcentDate(0);
    }
  }, [timeCounter, value.время, value.выдано]);

  const setCollor = useCallback(() => {
    let color: string;
    if (procentDate < 33) {
      color = "progressGreen";
      setCollorProgress(color);
    }
    if (procentDate > 33 && procentDate < 66) {
      color = "progressYellow";
      setCollorProgress(color);
    }
    if (procentDate > 66) {
      color = "progressRed";
      setCollorProgress(color);
    }
  }, [procentDate]);

  const clickHandler = () => {
    setTimeout(() => {
      setShowInfo(true);
    }, 200);
    setTimeout(() => {
      leaveHandler();
    }, 3200);
  };
  const leaveHandler = () => {
    setTimeout(() => {
      setShowInfo(false);
    }, 550);
  };

  useEffect(() => {
    setCollor();
  }, [collorProgress, getTimeEnd, setCollor]);

  useEffect(() => {
    getTimeEnd();
  }, [getTimeEnd]);


  useEffect(() => {
    setName();
  }, [setName]);
  return (
    <div className={styles[name]}>
      <h5>{sizName}</h5>
      <img className={styles.image} src={path} alt={name} />
      <div
        className={styles.progress_div}
        onClick={clickHandler}
        
      >
        {endDate.length != 0 && (
          <p className={showInfo ? styles.info : styles.infoNone}>
            Дата следующей выдачи {endDate}
          </p>
        )}

        <progress
          className={styles[collorProgress]}
          value={procentDate}
          max={100}
        />
        <h4>{`${procentDate} %`} </h4>
      </div>
    </div>
  );
};
