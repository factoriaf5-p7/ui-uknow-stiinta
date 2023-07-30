import { UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 bg-white flex w-full justify-center py-6 drop-shadow-lg">
      <Link to="/login">
        <UserCircle2 className="text-slate-500"/>
      </Link>
    </div>
  )
}