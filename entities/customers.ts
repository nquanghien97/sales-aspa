export interface CustomersEntity {
  id: number
  province: string
  district?: string
  ward?: string
  address?: string
  fullName: string
  phoneNumber?: string
  job?: string
  createdAt: Date
}