import { FC, useCallback, useEffect, useState } from "react";
import { Item, Table } from "..";
import styles from "./Modal.module.scss";

interface IKeyValueIdObject {
  value: any;
  name: string;
  id: string;
}

interface IModal {
  active: boolean;
  setActive: (active: boolean) => void;
  redFlag: boolean;
  setRedFlag: (active: boolean) => void;
  item: IKeyValueIdObject[];
}

interface IData {
  name: string;
  id: string;
  value: {
    выдано: string;
    выдача: string;
    время: string;
  };
}

export const Modal: FC<IModal> = ({ active, setActive, redFlag, setRedFlag, item }) => {
  const [link, setLink] = useState("");
  const fulName = item[0].value;
  const name = fulName.slice(0, -5).toLowerCase();
 
  const path = `../../assets/imagies/${name}.jpg`;
  const pathUstinkov =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169179";
  const pathBorovoi =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169174";
  const pathAksencev =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169171";
  const pathBichkov =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169172";
  const pathGolomuzdov =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169173";
  const pathKalujenov =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169176";
  const pathMichalchenko =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169175";
  const pathPateev =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169177";
  const pathSobolenko =
    "https://cloud.vitebsk.energo.net/index.php/apps/onlyoffice/s/zf5d2mfqxJt6jFk?fileId=2169178";

  const setLinkName = useCallback(() => {
    switch (name) {
      case "устинков":
        setLink(pathUstinkov);
        break;
      case "боровой":
        setLink(pathBorovoi);
        break;
      case "аксенцев":
        setLink(pathAksencev);
        break;
      case "бычков":
        setLink(pathBichkov);
        break;
      case "калуженов":
        setLink(pathKalujenov);
        break;
      case "голомуздов":
        setLink(pathGolomuzdov);
        break;
      case "михальченко":
        setLink(pathMichalchenko);
        break;
      case "патеев":
        setLink(pathPateev);
        break;
      case "соболенко":
        setLink(pathSobolenko);
        break;
    }
  }, [name]);

  useEffect(() => {
    setLinkName();
  }, [setLinkName]);

  return (
    <div className={active ? styles.modal_active : styles.modal}>
      <div className={styles.itemsSezon}>
        <div className={styles.buttonDiv}>
          <button
            className={styles.modalButton}
            onClick={() => setActive(false)}
          >
            X
          </button>
        </div>

        <div className={styles.modalInfo}>
          <div className={styles.modalPhoto}>
            <img src={path} alt={fulName} className={styles.img} />
            <p> {fulName}</p>
            <a href={link} target="_blank"> Карточка работника</a>
          </div>

          <Table name={name} />
        </div>

        <div className={styles.items}>
          {item.slice(1).map((obj: IData) => {
            return <Item {...obj} key={obj.id} redFlag={redFlag}
            setRedFlag={setRedFlag}/>;
          })}
        </div>
      </div>
    </div>
  );
};
