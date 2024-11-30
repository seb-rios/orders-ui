import { DropdownOption } from "../components/dropdown/Dropdown";

export const optionFormatter = <T extends object>(
  array: T[],
  value: keyof T & (string | number),
  label: keyof T & string
): DropdownOption[] => {
  return array.map((item) => ({
    value: item[value] as string | number,
    label: item[label] as string,
  }));
};
