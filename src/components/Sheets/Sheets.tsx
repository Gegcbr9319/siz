import { useDispatch } from "react-redux";
import styles from "./Sheets.module.scss";
import * as xlsx from "xlsx";
import { addInventory } from "../../assets/redux/inventorySlice";



export const Sheets = () => {
  const dispatch = useDispatch();
 

  const readUploadFile = (e: {
    preventDefault: () => void;
    target: { files: Blob[] };
  }) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          const data = e.target.result;
          const workbook = xlsx.read(data, {
            type: "binary",
            cellDates: true,
            dateNF: "mm/dd/yyyy;@",
          });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json: {
            работник: string;
            сиз: string;
            время: string | number;
            выдано: Date;
            выдача: Date;
          }[] = xlsx.utils.sheet_to_json(worksheet);

          const newObjects: { [key: string]: string | number | object }[] = [];

          for (const obj of json) {
            const existingObjectIndex = newObjects.findIndex(
              (item) => item["работник"] === obj["работник"]
            );
            if (existingObjectIndex !== -1) {
              const existingObject = newObjects[existingObjectIndex];
              existingObject[obj["сиз"]] = {
                время: obj["время"],
                выдано: obj["выдано"],
                выдача: obj["выдача"],
              };
            } else {
              const newObject: { [key: string]: string | number | object } = {
                работник: obj["работник"],
                [obj["сиз"]]: {
                  время: obj["время"],
                  выдано: obj["выдано"],
                  выдача: obj["выдача"],
                },
              };
              newObjects.push(newObject);
            }
          }

          dispatch(addInventory(newObjects));
        }
      };

      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div>
     
      <form className={styles.form}>
        <label /* htmlFor="upload" */ > Выберите таблицу для отображения</label>
        <input
          type="file"
          /* name="upload"
          id="upload" */
          
          onChange={readUploadFile}
        />
      </form>
    </div>
  );
};
