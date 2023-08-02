import { Outlet } from "react-router-dom"
import { SearchMobile } from "./SearchMobile"
import { BottomNavigation } from "./BottomNavigation"
import Header from "./Header"


function Layout(): JSX.Element {
  return (
    <div>
      <Header />
      <Outlet />
      <BottomNavigation />
    </div>
  )
}

export default Layout