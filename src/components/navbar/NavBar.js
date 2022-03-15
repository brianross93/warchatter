import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul className="nav">
        <li>
          <ul className="title">
            <li><img id="logo" src="./logo_white.png" alt="logo"/></li>
            <li id="title">War Chatter</li>
          </ul>
        </li>
        <li>
          <ul className="navlinks">
            <li>
              <NavLink 
                to='/' 
                className={'link'} 
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#FFFFFF',
                      }
                    : { 
                        color: '#B1B1B1', 
                      }
                    }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/tuner' 
                className={'link'}
                style={({ isActive }) =>
                isActive
                  ? {
                      color: '#FFFFFF',
                    }
                  : { 
                      color: '#B1B1B1', 
                    }
                  }
              >
                Tuner
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/recordings' 
                className={'link'}
                style={({ isActive }) =>
                isActive
                  ? {
                      color: '#FFFFFF',
                    }
                  : { 
                      color: '#B1B1B1', 
                    }
                  }
              >
                Recordings
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/charities' 
                className={'link'}
                style={({ isActive }) =>
                isActive
                  ? {
                      color: '#FFFFFF',
                    }
                  : { 
                      color: '#B1B1B1', 
                    }
                  }
              >
                Charities
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}