import { createSlice } from "@reduxjs/toolkit";

interface ISheets {
  работник: string
  [key: string]: {
    время: string;
    выдано: string;
    выдача: string;
  }
}

type SliceState = { inventory: ISheets[] };

const initialState: SliceState = { inventory: [] };

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addInventory(state, action) {
        action.payload.map((item: ISheets ) => state.inventory.push(item))
      
    },
  },
});

export const { addInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
