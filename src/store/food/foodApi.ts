import dayjs from "dayjs";

import store, { AppDispatch } from "..";
import { dateSorts, dateSortsObj, foodSlice } from "./foodReducer";

export type IFood = {
  type: string;
  date: string;
  emoji: string;
  name: string;
  typeColor: string;
};
export type IFilter = { name: string; quantity: number, color: string };

class BackendApi {
  foods: IFood[] = [
    {
      date: dayjs("04.13.2023").toISOString(),
      type: "питца",
      typeColor: "#d8e2dc",
      emoji: "🍕",
      name: "двойная пепперони",
    },
    {
      date: dayjs("04.12.2023").toISOString(),
      type: "суши",
      typeColor: "#ffe5d9",
      emoji: "🍣",
      name: "текка маки",
    },
    {
      date: dayjs("04.11.2023").toISOString(),
      type: "бургеры",
      typeColor: "#ffcad4",
      emoji: "🍔",
      name: "чизбургер",
    },
    {
      date: dayjs("04.10.2023").toISOString(),
      type: "суши",
      typeColor: "#ffe5d9",
      emoji: "🍣",
      name: "сашими",
    },
  ];

  async getFoods(type: string | null, order: string) {
    return this.foods
      .filter((f) => (type ? f.type === type : true))
      .sort(dateSortsObj[order as keyof typeof dateSortsObj]);
  }

  async getTypes() {
    const map = new Map<string, { quantity: number; color: string }>();

    this.foods.forEach((f) =>
      map.set(f.type, {
        quantity: (map.get(f.type)?.quantity || 0) + 1,
        color: f.typeColor,
      }),
    );

    return [...map.entries()].map((i) => ({
      name: i[0],
      quantity: i[1].quantity,
      color: i[1].color,
    }));
  }
}

export const backendApi = new BackendApi();

export const setFoods = (foods: IFood[]) => async (dispatch: AppDispatch) => {
  dispatch(foodSlice.actions.setFoods(foods));
};

export const setFoodType =
  (type: string | null) =>
  async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const newFoods = await backendApi.getFoods(
      type,
      getState().foodReducer.sort,
    );

    await dispatch(setFoods(newFoods));

    dispatch(foodSlice.actions.setFoodType(type));
  };

export const setFoodSort =
  (sort: string) =>
  async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const newFoods = await backendApi.getFoods(
      getState().foodReducer.type,
      sort,
    );

    await dispatch(setFoods(newFoods));

    dispatch(foodSlice.actions.setSort(sort));
  };

export const loadFood = () => async (dispatch: AppDispatch) => {
  const foods = await backendApi.getFoods(null, dateSorts[0]);

  console.log(foods);

  dispatch(setFoods(foods));
  dispatch(foodSlice.actions.setSort(dateSorts[0]));

  const types = await backendApi.getTypes();
  dispatch(foodSlice.actions.setFoodTypes(types));
};
