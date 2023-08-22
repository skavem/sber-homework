import { FoodFilters } from "./FoodFilters";
import { FoodSortDropdown } from "./FoodSortDropdown";

export const Selection = () => {
  return (
    <div className="flex select-none flex-row justify-between">
      <FoodFilters />

      <FoodSortDropdown />
    </div>
  );
};
