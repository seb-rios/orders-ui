import React, { useEffect } from "react";
import { Dropdown, Input, Modal } from "../../index";
import { useModal } from "../../../context/ModalContext";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectStatuses } from "../../../redux/statuses/statusesSelectors";
import { fetchStatuses } from "../../../redux/statuses/statusesThunks";
import { optionFormatter } from "../../../helpers/optionDropdown";
import { selectGarmentOptions } from "../../../redux/garments/garmentsSelectors";
import { fetchGarmentOptions } from "../../../redux/garments/garmentsThunks";

interface OrderCreateModalProps {
  open: boolean;
}

const OrderCreateModal: React.FC<OrderCreateModalProps> = ({ open }) => {
  const { closeModal } = useModal();
  const dispatch = useAppDispatch();
  const statuses = useAppSelector(selectStatuses);
  const garments = useAppSelector(selectGarmentOptions);

  useEffect(() => {
    dispatch(fetchStatuses());
    dispatch(fetchGarmentOptions());
  }, [dispatch]);

  const renderContent = (
    <>
      <Dropdown
        label="Prenda"
        options={optionFormatter(garments, "garment_id", "display_name")}
        onChange={() => console.log("Hello there!")}
      />
      <Input label="Cantidad de Prendas" placeholder="i.e 100" type="number" />
      <Dropdown
        label="Estado"
        options={optionFormatter(statuses, "id", "name")}
        onChange={() => console.log("Hello there!")}
      />
    </>
  );

  const handleOrderCreation = () => {
    closeModal();
  };

  const handleOrderCancelation = () => {
    closeModal();
  };

  return (
    <Modal
      id="order-create-modal"
      title="Crea una Orden"
      confirmLabel="Crear Orden"
      cancelLabel="Cancelar"
      open={open}
      onSubmit={() => handleOrderCreation()}
      onClose={() => handleOrderCancelation()}
      children={renderContent}
    />
  );
};

export default OrderCreateModal;
