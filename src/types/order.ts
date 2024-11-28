export enum Status {
  COMPLETED = "Completado",
  IN_PROFRESS = "En Proceso",
  PENDING = "Pendiente",
  CANCELLED = "Cancelado",
}

export interface Order {
  order_id: string;
  garment_name: string;
  style_desc: string;
  prod_name: string;
  prod_status: Status;
  client_name: string;
  created: string;
  updated: string;
  // TODO: all of this attributes need to be added to store procedure
  // quantity: string;
  // receivedDate: Date;
  // completedDate: Date;
  // deliveryDate: Date;
  // totalProcessingTime: number;
}
