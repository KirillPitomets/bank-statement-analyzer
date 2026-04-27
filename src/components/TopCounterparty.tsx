type Props = {
  data: { counterparty: string; total: number }[]
}

export function TopCounterparties({ data }: Props) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">
        Топ-5 контрагентів (витрати)
      </h2>

      <ul className="space-y-2">
        {data.map((item, i) => (
          <li
            key={i}
            className="flex justify-between p-2 border rounded-lg"
          >
            <span>{item.counterparty}</span>
            <span className="text-red-500">
              {item.total.toLocaleString("uk-UA")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}