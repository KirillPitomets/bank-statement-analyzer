import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table"
import type { ParseError } from "papaparse"

type props = {
  errors: ParseError[]
}

export const ParseErrorTable = ({ errors }: props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-red-500">Тип</TableHead>
          <TableHead className="text-red-500">Помилка</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {errors.map((err, indx) => (
          <TableRow key={`${err.message + indx}`}>
            <TableCell className="text-red-500">{err.type}</TableCell>
            <TableCell className="text-red-500">{err.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
