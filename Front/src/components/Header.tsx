import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useAuth  from '@/hooks/useAuth'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import useScrollListener from "@/hooks/useScrollListener"
import { useState, useEffect } from "react"
import { UserCircle2, FileStack, LogOut } from "lucide-react"
import { userInfo } from "os"

function Header(): JSX.Element {
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()
  const { auth } = useAuth()
  // console.log(auth.user.data, 'header')

  useEffect(() => {
    const _classList = []

    if (scroll.y < 550) {
      _classList.push('bg-transparent')
    }
    if (scroll.y > 15 && scroll.y - scroll.lastY > 0) {
      _classList.push('nav-bar--hidden')
    } else {
      _classList.push('bg-black')
    }

    setNavClassList(_classList)

  }, [scroll.y, scroll.lastY])


  return (
    <header className={`hidden md:flex md:fixed md:top-0 bg-white w-full z-20 ${navClassList}`}>
      <div className="container flex flex-1 mx-auto justify-between py-4">
      <Link to="/home">
        <div className="logo flex align-bottom">
          <img src="/logo.svg" alt="Logo image" />
        </div>
      </Link>
    <div className="ml-auto flex gap-3 align-center">
            <p className="flex my-auto gap-1 text-xl">{auth?.user?.data.wallet_balance}
            <span className="font-bold text-sm mt-auto">
               Kwl
              </span>
               </p>
      <Popover className="">
        <PopoverTrigger>
          <Avatar className="ml-auto">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <h5 className="text-center font-bold font-xl mb-3">{auth.user?.data.name}</h5>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4"><UserCircle2 />Profile</li>
            <li className="flex gap-4"><FileStack/> Contenidos</li>
            <li className="flex gap-4"><LogOut />Salir</li>
          </ul>
        </PopoverContent>
      </Popover>
      </div>
      </div>
    </header>
  )
}

export default Header