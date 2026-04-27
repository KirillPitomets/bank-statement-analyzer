import z from "zod"

export const transactionSchema = z.object({
  date: z.string(),
  counterparty: z.string(),
  description: z.string(),
  // z.corse - utility for transfer any type to number
  amount: z.coerce.number()
})

