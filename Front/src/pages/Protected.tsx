import { Link } from "react-router-dom"
function Protected() {
  return (
    <div>
      Protected here
      <Link to='/test'>test</Link>
      </div>
  )
}

export default Protected