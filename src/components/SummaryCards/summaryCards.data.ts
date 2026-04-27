export type cardItem = {
  id: string
  label: string
}

export const summaryCardsData: cardItem[] = [
  {
    id: "income",
    label: "Доходи"
  },
  {
    id: "expenses",
    label: "Витрати"
  },
  { id: "net", label: "Чистий дохід" },
  { id: "count", label: "Кількість транзакцій" }
]
