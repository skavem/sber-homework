import { useAppSelector } from "../../store/hooks";
import { FoodFilter } from "./FoodFilter";

export const FoodFilters = () => {
  const foodTypes = useAppSelector((s) => s.foodReducer.types);
  const selectedType = useAppSelector((s) => s.foodReducer.type);

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {foodTypes.map((ft) => (
        <FoodFilter
          ft={ft}
          selected={selectedType === ft.name}
          key={ft.color}
        />
      ))}
    </div>
  );
};
