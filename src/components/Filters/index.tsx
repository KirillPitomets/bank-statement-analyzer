import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select"
import { FilterType, filtersData } from "./filters.data"

type props = {
  filter: FilterType
  search: string
  handleSearch: (search: string) => void
  handleFilter: (filterId: FilterType) => void
  disenabled?: boolean
}

export default function Filters({
  filter,
  search,
  handleFilter,
  handleSearch,
  disenabled = true
}: props) {
  return (
    <div className="flex w-full gap-4">
      <Input
        onChange={e => handleSearch(e.target.value)}
        value={search}
        placeholder="Пошук..."
        disabled={disenabled}
      />

      <Select value={filter} onValueChange={handleFilter} disabled={disenabled}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Фільтр" />
        </SelectTrigger>
        <SelectContent>
          {filtersData.map(filterItem => (
            <SelectItem key={filterItem.id} value={filterItem.id}>
              {filterItem.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
