import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Header =()=>{
    
  const {setLogin,auth} =useContext(AuthContext)

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

    return  <header>
    <nav>
    <div>
  <Link to="/Dashboard">Dashboard</Link>
</div>

{isEmpty(auth)
?    <>
<div className="guest">
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </div>
</>
:

<div className="user">
<Link to="/Create">Add Album</Link>
<Link to="/Logout">Logout</Link>
</div>

}



    </nav>
  </header>

    
}

export default Header