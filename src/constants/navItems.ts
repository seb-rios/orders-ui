import { NavItem } from "../types/nav-items";

export const items: NavItem[] = [
  {
    icon: "notifications",
    name: "Notificaciones",
    to: "/notificaciones",
    onClick: () => console.log("hello!"),
  },
  {
    icon: "home",
    name: "Menu Principal",
    to: "/",
    onClick: () => console.log("hello!"),
  },
  {
    icon: "list_alt",
    name: "Ordenes",
    to: "ordenes",
    onClick: () => console.log("hello!"),
  },
  {
    icon: "task",
    name: "Tareas",
    to: "/tareas",
    onClick: () => console.log("hello!"),
  },
  {
    icon: "group",
    name: "Usuarios",
    to: "usuarios",
    onClick: () => console.log("hello!"),
  },
  {
    icon: "article",
    name: "Reportes",
    to: "reportes",
    onClick: () => console.log("hello!"),
  },
];
