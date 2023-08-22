import { setFoodSort } from "../../store/food/foodApi";
import { dateSorts } from "../../store/food/foodReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Dropdown } from "../miscellanous/Dropdown";

export const FoodSortDropdown = () => {
  const selectedSort = useAppSelector((s) => s.foodReducer.sort);
  const dispatch = useAppDispatch();

  return (
    <Dropdown
      value={selectedSort}
      items={dateSorts}
      onChange={(value) =>
        dispatch(setFoodSort(value))
      }
    />
  );
};
