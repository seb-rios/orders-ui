import React, { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { Button, OrderCreateModal, Table } from "../../components";
import { Order } from "../../types/order";
import { MenuItem, ListItemIcon } from "@mui/material";
import { DocumentScanner } from "@mui/icons-material";
import { columnsOrder } from "../../constants";
import { useModal } from "../../context/ModalContext";
import { ModalType } from "../../types/modal";

const OrderTable: React.FC<{ orders: Order[] | [] }> = ({ orders }) => {
  const columns = useMemo<MRT_ColumnDef<Order>[]>(() => columnsOrder, []);
  const { openModal, isOpen, modalType } = useModal();

  const handleOpenCreateOrder = () => {
    openModal(ModalType.CREATE_ORDER);
  };

  const renderRowActions = ({ row, closeMenu }: any) => {
    return [
      <MenuItem
        key={0}
        onClick={() => {
          alert("Viewing " + row.getValue("client_name") + "'s profile");
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
      customActions={({ table }) => (
        <>
          <Button
            label="Crear Orden"
            type="success"
            onClick={() => handleOpenCreateOrder()}
            size="md"
          />
          <OrderCreateModal
            open={isOpen && modalType === ModalType.CREATE_ORDER}
          />
        </>
      )}
    />
  );
};

export default OrderTable;
