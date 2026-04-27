import { Transaction } from "@/types/transaction"
import { Button } from "./ui/button"

import { useExportCSV } from "@/hooks/useExportCSV"

type props = {
  transactions: Transaction[]
}

export default function ExportTransactionButton({ transactions = [] }: props) {
  const handleExport = useExportCSV(transactions)

  return (
    <Button disabled={!!!transactions} onClick={handleExport}>
      Export
    </Button>
  )
}
