import { Transaction } from '@/types/transaction';
import { useMemo } from 'react';

export enum TableSortEnum {
  date,
  sum,
}

export const useTransactionTableSort = (
  transactions: Transaction[],
  sortBy: TableSortEnum,
  ascending: boolean
) => {
  return useMemo(() => {
    const sorted = [...transactions];

    switch (sortBy) {
      case TableSortEnum.date:
        return ascending
          ? sorted.sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
          : sorted.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );

      case TableSortEnum.sum:
        return ascending
          ? sorted.sort((a, b) => a.amount - b.amount)
          : sorted.sort((a, b) => b.amount - a.amount);
    }
    return sorted;
  }, [transactions, sortBy, ascending]);
};
