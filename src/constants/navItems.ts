import { NavBarItemsProps } from "../components/navbar-item/NavBarItem";

export const items: NavBarItemsProps[] = [
  {
    icon: "home",
    name: "Menu Principal",
    onClick: () => console.log("hello!"),
  },
  {
    icon: "list_alt",
    name: "Ordenes",
    onClick: () => console.log("hello!"),
  },
];
