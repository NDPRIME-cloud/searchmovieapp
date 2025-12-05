import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import searchimg from "../assets/images/Vector (3).png";
import dot from "../assets/images/Ellipse 6.png";
import bell from "../assets/images/Vector (5).png";
import { Link, NavLink } from "react-router-dom";
import slider from "react-slick";
import play from "../assets/images/Vector (6).png";
import later from "../assets/images/Vector (7).png";
import seemore from "../assets/images/Group 5.png";
import smallarrow from "../assets/images/Vector (8).png";

const FrontPage = () => {
  const apiKey = `af975e14`;
  const baseUrl = `https://www.omdbapi.com`;
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [searchReult, setSearchResult] = useState(null);
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);
  const [seriesData, setSeriesData] = useState(null);
  const [moviesData, setMoviesData] = useState(null);
  const [contentType, setContentType] = useState("movies");

  const words = [
    "flash",
    "lord of the rings",
    "princess",
    "arrow",
    "hero academia",
    "power Rangers",
    "bettle",
    "justice",
    "anime",
    "superman",
    "witcher",
    "hulk",
    "Frozen",
  ];
  const randomMovies = words[Math.floor(Math.random() * words.length)];

  const getseries = async () => {
    setError("");
    try {
      const res = await axios.get(
        `${baseUrl}/?apikey=${apiKey}&s=${randomMovies}&type=series&page=${page}`
      );
      console.log(res.data);
      setSeriesData(res.data.Search);
    } catch (error) {
      console.log(error);
      setError("Section not found");
    }
  };
  const getMovies = async () => {
    setError("");
    try {
      const res = await axios.get(
        `${baseUrl}/?apikey=${apiKey}&s=${randomMovies}&type=movie&page=${page}`
      );
      console.log(res.data);
      setMoviesData(res.data.Search);
    } catch (error) {
      console.log(error);
      setError("Section not found");
    }
  };

  const getMovie = async (searchPage = 1) => {
    setError("");
    try {
      if (!searchInput.trim()) return;

      setIsLoading(true);

      const res = await axios.get(
        `${baseUrl}/?apikey=${apiKey}&s=${searchInput}&page=${searchPage}`
      );
      console.log(res.data);

      if (res.data.Response === "False") {
        setError("Movie not found, check spelling.");
        return;
      }

      setMovieData(res.data.Search);
      setSearchResult(res.data.totalResults);
      setPage(searchPage);
    } catch (error) {
      setError("Movie not found!");

      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomMovies = async (frontPage = 1) => {
    try {
      setError("");
      const res = await axios.get(
        `${baseUrl}/?apikey=${apiKey}&s=${randomMovies}&page=${frontPage}`
      );
      console.log(res.data);
      if (res.data.Response === "True") {
        setMovieData(res.data.Search);
        setSearchResult(res.data.totalResults);
        setPage(frontPage);
        setSearchInput(randomMovies);
      }
    } catch (error) {
      setError("Something went wrong, check internet connection and try again");
      console.log(error);
    }
  };
  useEffect(() => {
    getRandomMovies();
    getseries();
    getMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === movieData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [movieData]);

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
        {isLoading && <small className="loading">Loading,Please wait...</small>}
        {error && <small className="error">{error}</small>}
        <div>
          <div className="slideShow">
            {movieData && (
              <div>
                <img src={movieData[index].Poster} alt="" />
                <div className="schedule">
                  <button>
                    <p> Watch Now</p>{" "}
                    <span>
                      <img src={play} alt="" />
                    </span>
                  </button>
                  <button>
                    <p>Watch Later</p>{" "}
                    <span className="later-img">
                      <img src={later} alt="" />
                    </span>
                  </button>
                </div>
                <h1 className="slideTitle">{movieData[index].Title}</h1>
              </div>
            )}
          </div>
        </div>
        <div className="result">
          {movieData && <p>Movies found: {searchReult} </p>}
        </div>

        <div className="recent-update-container">
          <div className="section-size">
            <p className="recent-text">Recently Updated</p>
            <div className="recent-update">
              {movieData?.slice(0, 4).map((item, idx) => (
                <div key={idx} className="small-poster">
                  <img src={item.Poster} alt="" />
                  <div className="">
                    <p className="lines">{item.Title}</p>
                    <p>{item.Year}</p>
                    <p>{item.Type}</p>
                  </div>
                </div>
              ))}
              <Link to="/" className="next">
                <img src={seemore} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="recent-update-container ">
          <div>
            <div className="side-clue">
              <p className="recent-text">Trending</p>

              <Link className="view-all">
                <p>View all</p>{" "}
                <span className="view-more">
                  <img src={smallarrow} alt="" className="yyy" />
                </span>
              </Link>
            </div>

            <div>
              <div className="trending">
                {movieData?.slice(0, 3).map((item, id) => (
                  <div key={id} className="trending-holder">
                    <img src={item.Poster} alt="" />
                    <div className=" trending-tag">
                      <p className="trending-lines">{item.Title}</p>
                      <p className="genre">{item.Type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="recent-update-container ">
          <div>
            <div className="side-clue">
              <p className="recent-text">New Release-Movies</p>

              <Link className="view-all">
                <p>View all</p>{" "}
                <span className="view-more">
                  <img src={smallarrow} alt="" className="yyy" />
                </span>
              </Link>
            </div>

            <div>
              <div className="new-release">
                {moviesData?.slice(0, 4).map((item, id) => (
                  <div key={id} className="new-release-holder">
                    <img src={item.Poster} alt="" />
                    <div className=" trending-tag">
                      <p className="trending-lines">{item.Title}</p>
                      <p className="genre">{item.Type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="recent-update-container ">
          <div>
            <div className="side-clue">
              <p className="recent-text">New Release - Series</p>

              <Link className="view-all">
                <p>View all</p>{" "}
                <span className="view-more">
                  <img src={smallarrow} alt="" className="yyy" />
                </span>
              </Link>
            </div>

            <div>
              <div className="new-release">
                {seriesData &&
                  seriesData?.slice(0, 4).map((item, id) => (
                    <div key={id} className="new-release-holder">
                      <img src={item.Poster} alt="" />
                      <div className=" trending-tag">
                        <p className="trending-lines">{item.Title}</p>
                        <p className="genre">{item.Type}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="recent-update-container ">
          <div>
            <div className="side-clue">
              <div className="selection-holder">
                <p className="recent-text">Recommended </p>
                <div className="selection">
                  <button
                    onClick={() => {
                      setContentType("movies");
                      getMovies();
                    }}
                  >
                    Movies
                  </button>
                  <button
                    onClick={() => {
                      setContentType("series");
                      getseries();
                    }}
                  >
                    Series
                  </button>
                  <button disabled>Animation</button>
                </div>
              </div>

              <Link className="view-all">
                <p>View all</p>{" "}
                <span className="view-more">
                  <img src={smallarrow} alt="" className="yyy" />
                </span>
              </Link>
            </div>

            <div>
              <div className="recommended">
                {contentType === "series"
                  ? seriesData?.slice(0, 8).map((item, id) => (
                      <div key={id} className="new-release-holder">
                        <img src={item.Poster} alt="" />
                        <div className=" trending-tag">
                          <p className="trending-lines">{item.Title}</p>
                          <p className="genre">{item.Type}</p>
                        </div>
                      </div>
                    ))
                  : moviesData?.slice(0, 8).map((item, id) => (
                      <div key={id} className="new-release-holder">
                        <img src={item.Poster} alt="" />
                        <div className=" trending-tag">
                          <p className="trending-lines">{item.Title}</p>
                          <p className="genre">{item.Type}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-data">
          {" "}
          {movieData &&
            movieData.map((item) => (
              <div key={item.imdbID} className="single-movie">
                <div className="type-holder">
                  <p></p>
                  <p className="type">{item.Type}</p>
                </div>
                <div className="img">
                  {" "}
                  <img
                    src={item.Poster !== "N/A" ? item.Poster : "No image"}
                    alt=""
                  />
                </div>
                <p className="title">{item.Title}</p>
                <p>{item.Year}</p>
              </div>
            ))}
        </div>
        <div className="pagination">
          {movieData && (
            <button onClick={() => getMovie(page - 1)} disabled={page === 1}>
              Prev
            </button>
          )}

          {movieData && movieData.length > 0 && (
            <button
              onClick={() => getMovie(page + 1)}
              disabled={page >= Math.ceil(searchReult / 10)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
