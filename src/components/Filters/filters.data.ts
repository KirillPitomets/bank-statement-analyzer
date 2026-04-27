export type FilterType = "all" | "income" | "expense"

export type Filter = {
  id: FilterType
  label: string
}

export const filtersData: Filter[] = [
  { id: "all", label: "Всі" },
  { id: "income", label: "Дохід" },
  { id: "expense", label: "Витрати" }
]
