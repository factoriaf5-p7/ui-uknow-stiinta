import { Input } from "@/components/ui/input"

export function SearchMobile() {
  return(
    <div className="bg-[url('/header-bg.svg')] bg-no-repeat bg-cover px-4 py-6 rounded-bl-3xl rounded-br-3xl md:hidden">
      <Input placeholder="Buscar" />
    </div>
  )
}