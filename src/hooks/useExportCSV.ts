import { Transaction } from "@/types/transaction"
import Papa from "papaparse"

export const useExportCSV = (transactions: Transaction[]) => {
  return () => {
    const csv = Papa.unparse(transactions)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" })

    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)

    link.setAttribute("href", url)
    link.setAttribute("download", "data.csv")
    link.style.visibility = "hidden"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
