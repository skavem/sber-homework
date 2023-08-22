import { useState } from "react";
import { ReactComponent as Chevron } from "../../pictures/chevron.svg";
import { ReactComponent as Checkmark } from "../../pictures/checkmark.svg";
import cn from "../../utils/cn";

export const Dropdown = <T extends string>({
  onChange,
  value,
  items,
}: {
  onChange: (newValue: T) => void;
  value: T;
  items: T[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="aboslute select-none">
      <div
        className="flex items-center justify-start gap-1 relative"
        onClick={() => setIsOpen((o) => !o)}
      >
        <div className="text-base text-zinc-800">{value}</div>

        <div className="h-4 w-4">
          <Chevron />
        </div>
      </div>

      <ul
        className={cn(
          "absolute right-4 xl:right-20 hidden w-48 flex-col items-start justify-start rounded-lg border border-neutral-200 bg-white py-1 shadow-lg",
          {
            flex: isOpen,
          },
        )}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex w-full flex-row items-center justify-between bg-white px-4 py-2.5 hover:bg-slate-100"
            onClick={() => {
              onChange(item);
              setIsOpen(false);
            }}
          >
            {item}
            {value === item && <Checkmark className="h-4 w-4" />}
          </li>
        ))}
      </ul>
    </div>
  );
};
