import { useState, useEffect } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => { 
    
    //const response = await fetch();
    //const json = await response.json();
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&order_by=desc`)
    ).json();
    setMovies(json.data.movies);
    setLoding(false);
  }

  console.log(movies);

  useEffect(() => { 
    getMovies();
  },[])

  return (
    <div>
      {
        loding ?
          <h1>Loding....</h1>
          :
          <div>
            {
              movies.map((movie, index) =>
                <div key={movie.id}>
                  <img src={movie.medium_cover_image} atl="" />
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>) 
            }
          </div>
      }
    </div>
  );
}

export default App;
