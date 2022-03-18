import { NavLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul className="nav">
        <NavLink to='/' className={'link'} >
          <li>
            <ul className="title">
              <li><img id="logo" src="./logo_white.png" alt="logo"/></li>
              <li id="title">War Chatter</li>
            </ul>
          </li>
        </NavLink>
        <li>
          <ul className="navlinks">
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
              <NavLink 
                to='/transcripts' 
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
                Transcripts
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}