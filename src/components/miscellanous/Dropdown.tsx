import { useState } from "react";

import { ReactComponent as Chevron } from "../../pictures/chevron.svg";
import cn from "../../utils/cn";
import { DropdownOption } from "./DropdownOption";

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
        className="relative flex items-center justify-start gap-1"
        onClick={() => setIsOpen((o) => !o)}
      >
        <div className="text-base text-zinc-800">{value}</div>

        <div className="h-4 w-4">
          <Chevron />
        </div>
      </div>

      <ul
        className={cn(
          "absolute right-4 hidden w-48 flex-col items-start justify-start rounded-lg border border-neutral-200 bg-white py-1 shadow-lg xl:right-20",
          {
            flex: isOpen,
          },
        )}
      >
        {items.map((item) => (
          <DropdownOption
            value={value}
            item={item}
            onChange={onChange}
            setIsOpen={setIsOpen}
          />
        ))}
      </ul>
    </div>
  );
};
