import { FC,  useEffect, useState } from "react";
import { Modal } from "..";
import styles from "./Card.module.scss";



interface IKeyValueObject {
  [key: string]: string;
}

interface IKeyValueIdObject {
  value: any;
  name: string;
  id: string;
}

export const Card: FC<IKeyValueIdObject> = ({ ...item }) => {

  const [modalActive, setModalActive] = useState(false);

  function objectToArrayWithId(obj: IKeyValueObject): IKeyValueIdObject[] {
    return Object.keys(obj).map((name, index) => ({
      name,
      id: `id_${index}`,
      value: obj[name],
    }));
  }

  const arrayOfObjectsWithId: IKeyValueIdObject[] = objectToArrayWithId(item);

  /* const modalHandler = useCallback(() => {
    if (modalActive === false){
      setModalActive(true)
    } else {
      setModalActive(false)
    }
    console.log("setModal", modalActive);
  },[modalActive]) */

  /* console.log(arrayOfObjectsWithId.slice(1)); */

  const name = arrayOfObjectsWithId[0].value.slice(0,-5).toLowerCase();
  const path = `../../assets/imagies/${name}.jpg`;

  useEffect(() => {
    console.log(modalActive, "11")
  }, [modalActive]);

  return (
    <div className={styles.cardDiv}>
      <h3>{arrayOfObjectsWithId[0].value}</h3>
      <img className={styles.image} src={path} alt={name} />
      <button onClick={() =>setModalActive(true)} className={styles.button}>Открыть</button>

      <Modal item={arrayOfObjectsWithId} active={modalActive} setActive={setModalActive}/>
      
    </div>
  );
};
