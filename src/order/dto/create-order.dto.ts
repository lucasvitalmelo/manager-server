export class CreateOrderDto {
  customerId: number
  tattooType: string
  bodyLocation: string
  width: number
  height: number
  price: number
  status: "PENDING" | "PROGRESS" | "CONCLUDED"
  tags: string[]
  description?: string
  scheduledDate?: Date
}
