import { Transaction } from "@/types/transaction"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table"

type Props = {
  transactions: Transaction[]
}

export default function TransactionTable({ transactions }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Дата</TableHead>
          <TableHead>Контрагент</TableHead>
          <TableHead>Опис</TableHead>
          <TableHead>Сумма</TableHead>
          <TableHead>Тип</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactions.length ? (
          transactions.map((t, indx) => (
            <TableRow key={indx}>
              <TableCell>{t.date}</TableCell>
              <TableCell>{t.counterparty}</TableCell>
              <TableCell>{t.description}</TableCell>
              <TableCell
                className={t.amount > 0 ? "text-green-500" : "text-red-500"}
              >
                {t.amount}
              </TableCell>
              <TableCell>{t.amount > 0 ? "Дохід" : "Витрати"}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-5xl text-center py-30 text-muted-foreground/40"
            >
              Треба загрузити CSV файл
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
