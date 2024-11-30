import React, { useEffect, useRef } from "react";

interface ModalProps {
  id: string;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  id,
  title,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  children,
  open,
  onClose,
  onSubmit,
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [open]);

  const handleClose = () => {
    if (onClose) onClose();
    modalRef.current?.close();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
    modalRef.current?.close();
  };

  return (
    <dialog id={id} className="modal" ref={modalRef}>
      <div className="modal-box relative">
        {showCloseButton && (
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleClose}
          >
            ✕
          </button>
        )}
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <form onSubmit={handleSubmit} method="dialog">
          <div className="py-4">{children}</div>
          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              {confirmLabel}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleClose}
            >
              {cancelLabel}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
