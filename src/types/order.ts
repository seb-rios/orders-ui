export enum Status {
  COMPLETED = "Completado",
  IN_PROFRESS = "En Proceso",
  PENDING = "Pendiente",
  CANCELLED = "Cancelado",
}

export interface Order {
  id: string;
  client: string; // Client needs to be an isolated type, string for now!
  quantity: string;
  status: Status;
  receivedDate: Date;
  completedDate: Date;
  deliveryDate: Date;
  totalProcessingTime: number;
}
