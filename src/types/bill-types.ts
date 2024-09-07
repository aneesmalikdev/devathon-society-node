export enum BillType {
  Electricity = 'electricity',
  Water = 'water',
  Gas = 'gas',
  Internet = 'internet',
  Maintenance = 'maintenance',
}
export enum BillStatus {
  Open = 'open',
  OverDue = 'over-due',
  Paid = 'paid',
}

export interface IBill extends Document {
  amount: number
  type: BillType
  status: BillStatus
  paidAt?: Date
  dueDate: Date
}
