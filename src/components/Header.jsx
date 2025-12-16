import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = ({dot,searchInput,setError,setSearchInput,getMovie,searchimg,bell}) => {
  return (
    <div className="nav-bar">
          <div className="first-handle">
            <div className="one-a">
              <NavLink to="/">Home</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>

            <div className="one-a">
              <NavLink to="/">Genre</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>

            <div className="one-a">
              <NavLink to="/">Country</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>
          </div>
          <div className=" input-container">
            <div>
              <input
                type="text"
                name=""
                id=""
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value.trimStart());
                  setError("");
                }}
                placeholder="search movies..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchInput.trim()) {
                    getMovie();
                  }
                }}
              />
            </div>

            <span className="search-img" onClick={() => getMovie()}>
              <img src={searchimg} alt="" />
            </span>
            {/* <button onClick={() => getMovie()}> Search</button> */}
          </div>
          <div className="second-handle">
            <div className="one-a">
              <NavLink to="/">Movies</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>

            <div className="one-a">
              <NavLink to="/">Series</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>

            <div className="one-a">
              <NavLink to="/">Animation</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>
          </div>
          <div className="third-handle">
            <div className="one-a">
              <NavLink to="/">Login</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>
            <span>/</span>
            <div className="one-a">
              <NavLink to="/">Signup</NavLink>
              <span className="dot">
                <img src={dot} alt="" />
              </span>
            </div>
          </div>
          <div className="fourth-handle">
            <NavLink>
              <img src={bell} alt="" />
            </NavLink>
          </div>
        </div>
  )
}

export default Header