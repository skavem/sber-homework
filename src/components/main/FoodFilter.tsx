import { IFilter, setFoodType } from "../../store/food/foodApi";
import { useAppDispatch } from "../../store/hooks";
import cn from "../../utils/cn";

export const FoodFilter = ({
  ft,
  selected,
}: {
  ft: IFilter;
  selected: boolean;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex items-center justify-start gap-1 rounded-2xl px-4 py-0.5"
      style={{ backgroundColor: ft.color }}
      onClick={() => {
        dispatch(setFoodType(selected ? null : ft.name));
      }}
    >
      <input type="radio" className="hidden" checked={selected} />

      <span
        className={cn("text-zinc-500", {
          "text-zinc-950": selected,
        })}
      >
        {ft.name}
      </span>
      <span className="font-semibold text-zinc-500">{ft.quantity}</span>
    </div>
  );
};
