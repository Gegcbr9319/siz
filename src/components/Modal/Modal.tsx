import { FC } from "react";
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

export const Modal: FC<IModal> = ({ active, setActive, item }) => {
  const fulName = item[0].value;
  const name = fulName.slice(0, -5).toLowerCase();
  const path = `../../assets/imagies/${name}.jpg`;

  /* console.log(item);
console.log(Array.isArray(item)); */
  console.log(name, "22");

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
          </div>

          <Table name={name} />
        </div>

        <div className={styles.items}>
          {item.slice(1).map((obj: IData) => {
            return <Item {...obj} key={obj.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
