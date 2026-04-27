import { useRef } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

type Props = {
  onFileUpload: (file: File) => void
}

export default function UploadArea({ onFileUpload }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (file) onFileUpload(file)
  }

  return (
    <div
      className="flex flex-col items-center gap-2 p-10 border-2 border-black border-dashed cursor-pointer rounded-4xl hover:bg-muted/80"
      onClick={() => inputRef.current?.click()}
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        handleFile(file)
      }}
    >
      <p>Перетягни CSV файл або натисни</p>
      <Button>Завантажити</Button>

      <Input
        ref={inputRef}
        type="file"
        accept=".csv"
        hidden
        onChange={e => {
          const file = e.target.files?.[0]
          if (file) onFileUpload(file)
        }}
      />
    </div>
  )
}
