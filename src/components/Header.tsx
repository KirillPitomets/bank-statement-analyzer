import { ThemeToggle } from "./ThemeToggle"

export const Header = () => {
  return (
    <header className="container flex items-center justify-between w-full mx-auto my-10">
      <p className="text-xl font-bold">Bank Statement Analyzer</p>

      <ThemeToggle />
    </header>
  )
}
