import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import dot from "../assets/images/Ellipse 6.png";
import bell from "../assets/images/Vector (5).png";
import searchimg from "../assets/images/Vector (3).png";
import axios from "axios";
import calendar from "../assets/images/Group.png";
import star from "../assets/images/Vector (10).png";
import windup from "../assets/images/Vector (9).png";
import slidedown from "../assets/images/Vector (11).png";
import thumbsup from "../assets/images/Vector (12).png";
import thumbsdown from "../assets/images/Vector (13).png";
import person1 from "../assets/images/Ellipse 10.png";
import person2 from "../assets/images/Ellipse 11.png";
import person3 from "../assets/images/Ellipse 12.png";
import person4 from "../assets/images/Ellipse 13.png";

const MoviInfo = () => {
  const [MVData, setMVData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const apiKey = `af975e14`;
  const baseUrl = `https://www.omdbapi.com`;
  const Word = "Arrow";

  const getMovieInfo = async () => {
    setError("");
    try {
      const res = await axios.get(`${baseUrl}/?apikey=${apiKey}&s=${Word}`);
      if (res.data.Response === "True") {
        setMVData(res.data.Search);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <div className="main-container">
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
                    getMovieInfo();
                  }
                }}
              />
            </div>

            <span className="search-img" onClick={() => getMovieInfo()}>
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
        <div className="movie-preview">
          {MVData.length > 0 && (
            <div className="info-poster">
              <img src={MVData[0].Poster} alt="" className="preview" />
            </div>
          )}
        </div>
        <div className="sector-2">
          <div className="movie-preview-container">
            <div className="preview-container">
              <div>
                {MVData.length > 0 && (
                  <div>
                    <img
                      src={MVData[0].Poster}
                      alt=""
                      className="preview-image"
                    />
                  </div>
                )}
              </div>

              <div>
                <div className="title-holder">
                  <p className="movie-name">Arrow</p>
                  <button>
                    <span className="plus">+</span> Add to Favourite
                  </button>
                </div>
                <div className="preview-descriptions">
                  <p className="drama">Drama</p>
                  <p className="fiction">Science Fiction</p>

                  <div className="tunes">
                    <div>
                      <img src={calendar} alt="" /> <span>2023</span>
                    </div>
                    <div>
                      <img src={windup} alt="" /> <span>50:38</span>
                    </div>
                    <div>
                      <img src={star} alt="" /> <span>8.5</span>
                    </div>
                  </div>
                </div>
                <div className="story">
                  <p>
                    In a ruined and toxic future, a community exists in a giant
                    underground silo that plunges <br />
                    hundreds of stories deep. There, men and women live in a
                    society full of regulations they <br />
                    believe are meant to protect them.
                  </p>
                </div>
                <div className="story-overview">
                  <div style={{ textAlign: "right" }}>
                    <p> Country</p>
                    <p> Genre</p>
                    <p> Date Release</p>
                    <p> Production</p>
                    <p style={{ marginTop: "20px" }}> Cast</p>
                  </div>
                  <div>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p style={{ marginTop: "20px" }}>:</p>
                  </div>
                  <div>
                    <p> United States</p>
                    <p> Drama, Science Fiction</p>
                    <p>May 05 2023</p>
                    <p> AMC Studios</p>
                    <p>
                      {" "}
                      Tim Robbins, Rebecca Ferguson, Avi Nash, <br />
                      Rashida Jones, David Oyewolo, Tim Robbins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sector-3">
          <div className="movie-preview-container">
            <div className="season">
              {" "}
              <p>
                Season 1{" "}
                <span>
                  <img src={slidedown} alt="" />
                </span>
              </p>
            </div>
            <div className="episode-container">
              <div className="episodes">
                <div>
                  <img src="" alt="" /> <span>Episode 1: Freedom Day</span>
                </div>
                <div>
                  {" "}
                  <img src="" alt="" /> <span>Episode 2: Holston’s Pick</span>
                </div>
                <div>
                  <img src="" alt="" /> <span>Episode 3: Machines</span>
                </div>
              </div>
              <div className="episodes">
                <div>
                  <img src="" alt="" /> <span>Episode 4: Truth</span>
                </div>
                <div>
                  <img src="" alt="" />{" "}
                  <span>Episode 5: The Janitor’s Boy</span>
                </div>
                <div>
                  <img src="" alt="" /> <span>Episode 6: The Relic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sector-4">
          <div className="movie-preview-container">
            <p className="may-like">You may also like</p>
            <div className="may-like-movies">
              {MVData.slice(1, 9).map((i, d) => (
                <div key={d} className="may-like-single-movie">
                  <img src={i.Poster} alt="" />
                  <div style={{ display: "flex" }}>
                    <p className="single-movie-title">{i.Title}</p>
                    <p className="hd">HD</p>
                    <p className="season1">season 1</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sector-5">
          <div className="movie-preview-container">
            <p className="comment">comments</p>
            <div>
              <div className="comment-holder">
                <div>
                  <img src={person4} alt="" />
                </div>
                <div>
                  <p>james</p>
                  <div className="comment-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Write your comments here...."
                    />
                  </div>
                </div>
              </div>

              <div className="comment-holder">
                <div>
                  <img src={person1} alt="" />
                </div>
                <div>
                  <p>Arlene</p>
                  <p>12/06/2020</p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con
                  </p>
                  <div className="reactions">
                    <div className="thumbsup">
                      <img src={thumbsup} alt="" />
                      <small>10</small>
                    </div>
                    <div>
                      <img src={thumbsdown} alt="" />
                    </div>
                    <small className="reply">Reply</small>
                  </div>
                </div>
              </div>

              <div className="comment-holder">
                <div>
                  <img src={person2} alt="" />
                </div>
                <div>
                  <p>Arlene</p>
                  <p>12/06/2020</p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con
                  </p>
                  <div className="reactions">
                    <div className="thumbsup">
                      <img src={thumbsup} alt="" />
                      <small>10</small>
                    </div>
                    <div>
                      <img src={thumbsdown} alt="" />
                    </div>
                    <small className="reply">Reply</small>
                  </div>
                </div>
              </div>
              <div className="comment-holder-lastone">
                <div>
                  <img src={person3} alt="" />
                </div>
                <div>
                  <p>Arlene</p>
                  <p>12/06/2020</p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con
                  </p>
                  <div className="reactions">
                    <div className="thumbsup">
                      <img src={thumbsup} alt="" />
                      <small>10</small>
                    </div>
                    <div>
                      <img src={thumbsdown} alt="" />
                    </div>
                    <small className="reply">Reply</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviInfo;
