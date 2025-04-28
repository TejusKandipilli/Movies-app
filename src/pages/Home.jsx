import MovieCard from "../components/MovieCard.jsx";
import { useState } from "react";
import "../css/Home.css"

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John", release_date: "2020", url: "some-url" },
    { id: 2, title: "Matrix", release_date: "2022", url: "some-url" },
    { id: 3, title: "Terminator", release_date: "2025", url: "some-url" },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} placeholder="Search for movies..." className="search-input"></input>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => 
         <MovieCard movie={movie} key={movie.id} />
        )}
      </div>
    </div>
  );
}

export default Home;
