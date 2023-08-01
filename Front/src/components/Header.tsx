import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function Header(): JSX.Element {
  return (
    <header className="hidden md:flex bg-white w-full">
      <div className="container flex flex-1 mx-auto justify-between py-4">
      <Link to="/home">
        <div className="logo flex align-bottom">
          <img src="/logo.svg" alt="Logo image" />
        </div>
      </Link>
      <Popover className="ml-auto">
        <PopoverTrigger>
          <Avatar className="ml-auto">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      </div>
    </header>
  )
}

export default Header