import { MRT_ColumnDef } from "material-react-table";
import { Order } from "../types/order";

export const columnsOrder: MRT_ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Orden",
    size: 50,
  },
  {
    accessorKey: "client",
    header: "Cliente",
    size: 100,
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
    size: 50,
  },
  {
    accessorKey: "garmentId",
    header: "Código de Prenda",
    size: 50,
  },
  {
    accessorKey: "status",
    header: "Estado",
    size: 150,
  },
  {
    accessorKey: "receivedDate",
    header: "Fecha Recibida",
    size: 150,
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  },
  {
    accessorKey: "completedDate",
    header: "Fecha Completada",
    size: 150,
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  },
  {
    accessorKey: "totalProcessingTime",
    header: "Tiempo Proceso Total",
    size: 50,
  },
  {
    accessorKey: "deliveryDate",
    header: "Fecha de Entrega",
    size: 150,
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  },
];
