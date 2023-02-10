import { Link } from "react-router-dom";
function NavBar(){
    return (
        <nav>
            <div className="topnav">
              <Link to="/">Pocetna</Link>
              <Link to="/kontakt">Zakazivavnje</Link>
              <Link to="/doktori">Doktori</Link>
              <Link to="/izabrani">Izabrani doktor</Link>
    
            </div>
        </nav>
    )
}
export default NavBar;