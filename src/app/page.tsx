"use client"
import ExportTransactionButton from "@/components/ExportTransactionButton"
import Filters from "@/components/Filters"
import { ParseErrorTable } from "@/components/ParseErrorTable"
import SummaryCards from "@/components/SummaryCards"
import { TopCounterparties } from "@/components/TopCounterparty"
import TransactionTable from "@/components/TransactionTable"
import UploadArea from "@/components/UploadArea"
import { useParseCSV } from "@/hooks/useParseCSV"
import { useTransactionTable } from "@/hooks/useTransactionTable"
import {
  calculateSummary,
  topExpensesCounterparties
} from "@/lib/statement/statement"
import { useMemo } from "react"

export default function Page() {
  const { handleUpload, invalidCount, errors, transactions } = useParseCSV()

  const { filtered, filter, search, handleFilter, handleSearch } =
    useTransactionTable(transactions)

  const summary = useMemo(() => {
    return calculateSummary(filtered)
  }, [filtered])

  const top = useMemo(() => {
    return topExpensesCounterparties(transactions)
  }, [transactions])

  return (
    <div className="container px-2 mx-auto space-y-10">
      <UploadArea onFileUpload={handleUpload} />

      {invalidCount > 0 && (
        <p className="text-sm text-red-500">
          Пропущено {invalidCount} рядків через помилки
        </p>
      )}

      {errors && <ParseErrorTable errors={errors} />}
      <SummaryCards
        count={summary.count}
        expenses={summary.expenses}
        income={summary.income}
        net={summary.net}
      />
      <div className="flex flex-col items-end space-y-4">
        <Filters
          filter={filter}
          search={search}
          handleFilter={handleFilter}
          handleSearch={handleSearch}
          disenabled={!!!transactions}
        />
        <ExportTransactionButton transactions={filtered} />
      </div>
      <TopCounterparties data={top} />
      <TransactionTable transactions={filtered} />
    </div>
  )
}
