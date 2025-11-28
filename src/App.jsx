import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const apiKey = `af975e14`;
  const baseUrl = `https://www.omdbapi.com`;
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [searchReult, setSearchResult] = useState(null);
  const [page, setPage] = useState(1)

  const getMovie = async (searchPage = 1) => {
    setError("");
    try {
      if (!searchInput.trim())return
        
      setIsLoading(true);

      const res = await axios.get(
        `${baseUrl}/?apikey=${apiKey}&s=${searchInput}&page=${searchPage}`
      );
      console.log(res.data);

      if (res.data.Response === "False") {
        
        setError("Movie not found, check spelling or internet and try again");
        return;
      }

      setMovieData(res.data.Search);
      setSearchResult(res.data.totalResults);
      setPage(searchPage)
    } catch (error) {
      setError("Movie not found!");
    
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomMovies = async (frontPage = 1)=>{
    const words = ["flash", "lord of the rings", "princess", "arrow", "hero academia", "power Rangers","bettle", "justice", "anime", "superman", "witcher", "hulk"]
    const randomMovies = words[Math.floor(Math.random() * words.length)]

    try{
      setError("")
      const res =  await axios.get(
        `${baseUrl}/?apikey=${apiKey}&s=${randomMovies}&page=${frontPage}`
      );
      console.log(res.data)
      if(res.data.Response === "True"){
        setMovieData(res.data.Search)
        setSearchResult(res.data.totalResults)
        setPage(frontPage)
        setSearchInput(randomMovies)
      }

    }catch(error){
      setError("Something went wrong, check internet connection and try again")
      console.log(error)

    }
  }
useEffect(() => {

  getRandomMovies()
}, [])

 
  

  return (
    <div>
      <div className=" input-container">
        <input
          type="text"
          name=""
          id=""
          value={searchInput}
          onChange={(e) => {setSearchInput(e.target.value.trimStart())
            setError("")
          }}

          placeholder="search movies..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchInput.trim()) {
             
               getMovie();
            }
          }}
          
        />
        <button onClick={() => getMovie()}> Search</button>
        
      </div>
      {isLoading && <p className="loading">Loading,Please wait...</p>}
      {error && <p className="error">{error}</p>}
    <div className="result">{movieData && <p>Movies found: {searchReult} </p>}</div>  

   <div className="movie-data">   {movieData &&
        movieData.map((item) => (
          <div key={item.imdbID} className="single-movie">
            <div className="img">
              {" "}
              <img src={item.Poster ? item.Poster : "No image"} alt="" />
            </div>
            <p className="title">{item.Title}</p>
            <p>{item.Year}</p>
          </div>
          

       
        ))}
       
</div>
       <div className="pagination">
         {page && ( <button onClick={()=> getMovie(page - 1)}
             disabled={page === 1}>Prev</button>
)}
         
            {movieData && movieData.length > 0 && (<button onClick={()=> getMovie(page + 1)} disabled={page >= Math.ceil(searchReult / 10)}>Next</button>)}  
        </div>
    </div>
  );
}

export default App;
