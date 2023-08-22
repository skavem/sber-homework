import { setFoodType } from "../../store/food/foodApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const FoodFilter = () => {
  const foodTypes = useAppSelector((s) => s.foodReducer.types);
  const selectedType = useAppSelector((s) => s.foodReducer.type);

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {foodTypes.map((ft) => (
        <div
          className="flex items-center justify-start gap-1 rounded-2xl px-4 py-0.5"
          style={{ backgroundColor: ft.color }}
          onClick={() => {
            dispatch(setFoodType(selectedType === ft.name ? null : ft.name));
          }}
        >
          <input
            type="radio"
            className="hidden"
            checked={selectedType === ft.name}
          />

          <span className="text-zinc-500">{ft.name}</span>
          <span className="font-semibold text-zinc-500">{ft.quantity}</span>
        </div>
      ))}
    </div>
  );
};
