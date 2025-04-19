import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from "@prisma/client"

export interface CustomerInsightEntity {
  id: number
  age: CUSTOMER_INSIGHT_AGE
  time: CUSTOMER_INSIGHT_TIME
  customerStatus: string
  conclude: string
  solution: string
  createdAt: Date
}