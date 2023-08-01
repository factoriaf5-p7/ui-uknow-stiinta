import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Header(): JSX.Element {
  return (
    <header className="hidden md:flex align-center container">
      <Link to="/home">
        <div className="logo flex align-bottom">
          <img src="/logo.svg" alt="Logo image" />
        </div>
      </Link>
      <Avatar className="ml-auto">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  )
}

export default Header