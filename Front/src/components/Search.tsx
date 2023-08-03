import { Input } from "@/components/ui/input";
import React from "react";

function Search({
  onChange,
}: {
  onChange: React.ChangeEventHandler
}) {
  return(
    <div className="bg-[url('/header-bg.svg')] bg-no-repeat bg-cover md:bg-none px-4 py-6 rounded-bl-3xl rounded-br-3xl mb-9 ">
    <Input placeholder="Buscar curso" className="max-w-3xl mx-auto my-8" onChange={onChange} />
  </div>
  )
}

export default Search