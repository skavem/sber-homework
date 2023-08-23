import dayjs from "dayjs";

import { useAppSelector } from "../../store/hooks";

export const FoodsDisplay = () => {
  const foods = useAppSelector((s) => s.foodReducer.foods);

  return (
    <div className="grid grid-cols-1 w gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {foods.map((f) => (
        <div
          key={f.name}
          className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-4"
        >
          <div className="w flex w-full justify-between">
            <span
              className="rounded px-2 py-1"
              style={{ backgroundColor: f.typeColor }}
            >
              {f.type}
            </span>

            <span className="text-xs font-normal leading-none text-zinc-500">
              {dayjs(f.date).format("DD.MM.YY")}
            </span>
          </div>

          <div className="flex flex-row items-center gap-4">
            <span className="text-6xl">{f.emoji}</span>

            <span className="text-base">{f.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
