import styles from "./Cards.module.scss";
/* import workers from "../../assets/data/workers.json"; */
import { Card } from "..";
import { useSelector } from "react-redux";

interface ISheets {
  работник: string;
  glove?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  glass?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  hat?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  helmet?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  costume?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  choes?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  earphones?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  boots?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  winterHat?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  jacket?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  winterBoots?: {
    время: string;
    выдача: string;
    выдано: string;
  };
  cloack?: {
    время: string;
    выдача: string;
    выдано: string;
  };
}

export const Cards = () => {
  const inv = useSelector(
    (state: { inventoryState: { inventory: ISheets[] } }) =>
      state.inventoryState.inventory
  );

  return (
    <div className={styles.main}>
      {inv.length != 0 && <h3> Работники</h3>}
      <div className={styles.cards}>
        {inv.map((item) => {
          return <Card {...item} key={item.работник} />;
        })}
      </div>
    </div>
  );
};
