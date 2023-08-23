import { ReactComponent as Checkmark } from "../../pictures/checkmark.svg";

export const DropdownOption = <T extends string>({
  item,
  onChange,
  setIsOpen,
  value,
}: {
  item: T;
  onChange: (item: T) => void;
  value: T;
  setIsOpen: (state: boolean) => void;
}) => {
  return (
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
  );
};
