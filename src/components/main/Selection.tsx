import { FoodFilter } from "./FoodFilter";
import { FoodSortDropdown } from "./FoodSortDropdown";

export const Selection = () => {
  return (
    <div className="flex select-none flex-row justify-between">
      <FoodFilter />

      <FoodSortDropdown />
    </div>
  );
};
