import { describe, it, expect } from "vitest"
import { calculateSummary, topExpensesCounterparties } from "./statement"
import { Transaction } from "@/types/transaction"

const mockTransactions: Transaction[] = [
  {
    date: "2026-01-01",
    counterparty: "A",
    description: "income 1",
    amount: 100
  },
  {
    date: "2026-01-02",
    counterparty: "B",
    description: "income 2",
    amount: 200
  },
  {
    date: "2026-01-03",
    counterparty: "A",
    description: "expense 1",
    amount: -50
  },
  {
    date: "2026-01-04",
    counterparty: "B",
    description: "expense 2",
    amount: -150
  },
  {
    date: "2026-01-05",
    counterparty: "B",
    description: "expense 3",
    amount: -100
  }
]

describe("calculateSummary", () => {
  it("calculates income correctly", () => {
    const result = calculateSummary(mockTransactions)

    expect(result.income).toBe(300)
  })

  it("calculates expenses correctly", () => {
    const result = calculateSummary(mockTransactions)

    expect(result.expenses).toBe(-300)
  })

  it("calculates net correctly", () => {
    const result = calculateSummary(mockTransactions)

    expect(result.net).toBe(0)
  })

  it("returns correct count", () => {
    const result = calculateSummary(mockTransactions)

    expect(result.count).toBe(5)
  })
})

describe("topExpensesCounterparties", () => {
  it("aggregates expenses by counterparty correctly", () => {
    const result = topExpensesCounterparties(mockTransactions)

    expect(result).toEqual([
      { counterparty: "B", total: 250 },
      { counterparty: "A", total: 50 }
    ])
  })

  it("respects topN limit", () => {
    const result = topExpensesCounterparties(mockTransactions, 1)

    expect(result).toEqual([{ counterparty: "B", total: 250 }])
  })

  it("returns empty array when no expenses", () => {
    const result = topExpensesCounterparties([
      {
        date: "2026-01-01",
        counterparty: "A",
        description: "income",
        amount: 100
      }
    ])

    expect(result).toEqual([])
  })
})
