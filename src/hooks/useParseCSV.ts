import { transactionSchema } from "@/lib/schemes/transaction.schema"
import { Transaction } from "@/types/transaction"
import { useState } from "react"
import Papa from "papaparse"

export const useParseCSV = () => {
  const [transactions, setTransations] = useState<Transaction[]>([])
  const [invalidCount, setInvalidCount] = useState(0)
  const [errors, setErrors] = useState<Papa.ParseError[] | null>(null)

  // ==== CSV upload handler and parse ====
  const handleUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete(results) {
        const valid: Transaction[] = []
        let invalid = 0

        // ==== error parsed ====
        if (results.errors.length) {
          setErrors(results.errors)
          setTransations([])
          setInvalidCount(0)
          return
        }
        // ==== success parsed ====
        results.data.forEach((row: unknown) => {
          const parsed = transactionSchema.safeParse(row)
          if (parsed.success) {
            valid.push(parsed.data)
          } else {
            invalid++
          }
        })

        setTransations(valid)
        setInvalidCount(invalid)
        setErrors(null)
      }
    })
  }

  return {
    handleUpload,
    transactions,
    errors,
    invalidCount
  }
}
