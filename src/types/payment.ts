export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  currency: 'BRL';
  method: string;
  status: 'pending' | 'completed' | 'failed';
  transactionId: string;
}
