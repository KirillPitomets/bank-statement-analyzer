import { Transaction } from "@/types/transaction"

export const calculateSummary = (transactions: Transaction[]) => {
  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0)

  return {
    income,
    expenses,
    net: income + expenses,
    count: transactions.length
  }
}

export const topExpensesCounterparties = (
  transactions: Transaction[],
  topN: number = 5
) => {
  const map = new Map<string, number>()

  transactions
    .filter(t => t.amount < 0)
    .forEach(t => {
      const current = map.get(t.counterparty) || 0
      map.set(t.counterparty, current + Math.abs(t.amount))
    })

  return [...map.entries()]
    .map(([counterparty, total]) => ({
      counterparty,
      total
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, topN)
}
