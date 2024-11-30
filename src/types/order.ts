export interface Status {
  id: string;
  name: string;
}

export interface Order {
  order_id: string;
  garment_name: string;
  order_quantity: string;
  style_desc: string;
  prod_name: string;
  prod_status: string;
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
