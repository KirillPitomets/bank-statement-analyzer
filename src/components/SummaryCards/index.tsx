import { Card, CardContent } from "../ui/card"

type props = {
  income: number
  expenses: number
  net: number
  count: number
}

export default function SummaryCards({ count, expenses, income, net }: props) {
  const format = (num: number) => {
    return num.toLocaleString("uk-UA", {
      style: "currency",
      currency: "UAH"
    })
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">Дохід</p>
          <p className="text-lg font-bold text-green-500">{format(income)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">Витрати</p>
          <p className="text-lg font-bold text-red-500">{format(expenses)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">Чистий результат</p>
          <p
            className={`text-lg font-bold ${
              net >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {format(net)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">Кількість</p>
          <p className="text-lg font-bold">{count}</p>
        </CardContent>
      </Card>
    </div>
  )
}
