import { MRT_ColumnDef } from "material-react-table";
import { Order } from "../types/order";

export const columnsOrder: MRT_ColumnDef<Order>[] = [
  {
    accessorKey: "order_id",
    header: "Orden",
    size: 50,
  },
  {
    accessorKey: "client_name",
    header: "Cliente",
    size: 100,
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
    size: 50,
  },
  {
    accessorKey: "garment_name",
    header: "Código de Prenda",
    size: 50,
  },
  {
    accessorKey: "prod_name",
    header: "Proceso",
    size: 150,
  },
  {
    accessorKey: "prod_status",
    header: "Estado",
    size: 150,
  },
  {
    accessorKey: "created",
    header: "Fecha Recibida",
    size: 150,
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  },
  // TODO: all of this attributes need to be added to store procedure
  // {
  //   accessorKey: "completedDate",
  //   header: "Fecha Completada",
  //   size: 150,
  //   Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  // },
  // {
  //   accessorKey: "totalProcessingTime",
  //   header: "Tiempo Proceso Total",
  //   size: 50,
  // },
  // {
  //   accessorKey: "deliveryDate",
  //   header: "Fecha de Entrega",
  //   size: 150,
  //   Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  // },
];
