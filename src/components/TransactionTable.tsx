import { Transaction } from '@/types/transaction';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { useState } from 'react';
import {
  TableSortEnum,
  useTransactionTableSort,
} from '@/hooks/useTransactionTableSort';
import { ArrowDown, ArrowUp } from 'lucide-react';

type Props = {
  transactions: Transaction[];
};

type SortType = {
  sortBy: TableSortEnum;
  ascending: boolean;
};

export default function TransactionTable({ transactions }: Props) {
  const [sort, setSort] = useState<SortType>({
    sortBy: TableSortEnum.date,
    ascending: true,
  });

  const sortedTransactions: Transaction[] = useTransactionTableSort(
    transactions,
    sort.sortBy,
    sort.ascending
  );

  const handleSort = (sortBy: TableSortEnum) => {
    if (sort.sortBy === sortBy) {
      setSort((prev) => ({ ...prev, ascending: !prev.ascending }));
      return;
    }
    setSort({ sortBy, ascending: true });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead
            className="cursor-pointer hover:bg-accent"
            onClick={() => handleSort(TableSortEnum.date)}
          >
            <div className="flex items-center justify-between">
              Дата
              {sort.sortBy === TableSortEnum.date && ( sort.ascending ?
                <ArrowUp />
               : 
                <ArrowDown />
              )}
            </div>
          </TableHead>
          <TableHead>Контрагент</TableHead>
          <TableHead>Опис</TableHead>
          <TableHead
            className="cursor-pointer hover:bg-accent"
            onClick={() => handleSort(TableSortEnum.sum)}
          >
            <div className="flex items-center justify-between">
              Сумма
               {sort.sortBy === TableSortEnum.sum && ( sort.ascending ?
                <ArrowUp />
               : 
                <ArrowDown />
              )}
            </div>
          </TableHead>
          <TableHead>Тип</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {sortedTransactions.length ? (
          sortedTransactions.map((t) => (
            <TableRow key={t.date}>
              <TableCell>{t.date}</TableCell>
              <TableCell>{t.counterparty}</TableCell>
              <TableCell>{t.description}</TableCell>
              <TableCell
                className={t.amount > 0 ? 'text-green-500' : 'text-red-500'}
              >
                {t.amount}
              </TableCell>
              <TableCell>{t.amount > 0 ? 'Дохід' : 'Витрати'}</TableCell>
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
  );
}
