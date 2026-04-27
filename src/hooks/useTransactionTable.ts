import { FilterType } from "@/components/Filters/filters.data"
import { Transaction } from "@/types/transaction"
import { useMemo, useState } from "react"

export const useTransactionTable = (transactions: Transaction[]) => {
  const [filter, setFilter] = useState<FilterType>("all")
  const [search, setSearch] = useState("")

  const handleFilter = (type: FilterType) => {
    setFilter(type)
  }
  const handleSearch = (value: string) => {
    setSearch(value)
  }

  // ==== filtered data ====
  const filtered = useMemo(() => {
    return transactions
      .filter(t => {
        if (filter === "all") return true
        if (filter === "income") return t.amount > 0
        if (filter === "expense") return t.amount < 0
      })
      .filter(t => {
        const query = search.toLowerCase()
        return (
          t.counterparty.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query)
        )
      })
  }, [filter, search, transactions])

  return {
    filtered,
    filter,
    search,
    handleFilter,
    handleSearch
  }
}
