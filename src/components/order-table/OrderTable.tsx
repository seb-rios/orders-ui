import React, { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { Table } from "../../components";
import { Order } from "../../types/order";
import { Button, MenuItem, ListItemIcon } from "@mui/material";
import { DocumentScanner, Send } from "@mui/icons-material";
import { columnsOrder } from "../../constants";

interface OrderTableProps {}

const OrderTable: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const columns = useMemo<MRT_ColumnDef<Order>[]>(() => columnsOrder, []);

  const renderRowActions = ({ row, closeMenu }: any) => {
    return [
      <MenuItem
        key={0}
        onClick={() => {
          alert("Viewing " + row.getValue("client") + "'s profile");
          closeMenu();
        }}
      >
        <ListItemIcon>
          <DocumentScanner />
        </ListItemIcon>
        Ver Orden
      </MenuItem>,
    ];
  };

  return (
    <Table
      columns={columns}
      data={orders}
      enableRowActions={true}
      renderRowActions={renderRowActions}
    />
  );
};

export default OrderTable;
