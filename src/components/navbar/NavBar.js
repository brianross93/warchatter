import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/tuner'>Tuner</NavLink></li>
        <li><NavLink to='/recordings'>Recordings</NavLink></li>
        <li><NavLink to='/charities'>Charities</NavLink></li>
      </ul>
    </div>
  );
}