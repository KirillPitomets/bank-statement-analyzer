import { transactionSchema } from "@/lib/schemes/transaction.schema"
import z from "zod"

export type Transaction = z.infer<typeof transactionSchema>
