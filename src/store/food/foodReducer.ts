import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { IFilter, IFood } from "./foodApi";

export type initialStateType = {
  type: string | null;
  types: IFilter[];
  sort: string;
  foods: IFood[];
};

export const dateSortsObj = {
  "сначала новые": (f1: IFood, f2: IFood) =>
    dayjs(f2.date).isBefore(f1.date) ? -1 : 1,
  "сначала старые": (f1: IFood, f2: IFood) =>
    dayjs(f1.date).isBefore(f2.date) ? -1 : 1,
} as const;
export const dateSorts = Object.keys(dateSortsObj);

const initialState: initialStateType = {
  type: null,
  types: [],
  sort: dateSorts[0],
  foods: [],
};

export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFoodType(state, action: PayloadAction<initialStateType["type"]>) {
      state.type = action.payload;
    },

    setFoodTypes(state, action: PayloadAction<IFilter[]>) {
      state.types = action.payload;
    },

    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },

    setFoods(state, action: PayloadAction<IFood[]>) {
      state.foods = action.payload;
    },
  },
});

export default foodSlice.reducer;
