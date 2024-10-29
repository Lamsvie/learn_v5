import { useState } from 'react';
import Addmovieform from './components/addmovieform';
import MovieCard from './components/movieCard';
import Filter from './components/filter';
import { useEffect } from 'react';

function App() {


  const [movies, setMovies] = useState([
    {
      titre: "Fast and furious",
      description: "It's a good movie",
      posterURL: "https://movies/fast&furious",
      note: "2/5"
    },
    {
      titre: "Blanche neige",
      description: "It's a good movie",
      posterURL: "https://movies/blancheneige",
      note: "3/5"
    },
    {
      titre: "Vikings",
      description: "It's a good movie",
      posterURL: "https://movies/vikings",
      note: "5/5"
    },
    {
      titre: "Game of throne",
      description: "It's a good movie",
      posterURL: "https://movies/gameofthrone",
      note: "4/5"
    }
  ])

  const [titreToFilter, setTitreToFilter] = useState("")
  const [filteredByTitre, setFilteredByTire] = useState(null)

  const addMovie = (newMovie) => {

    setMovies([...movies, newMovie])

  }

  const filterTitre = () => {

    setFilteredByTire(movies.filter(movie => movie.titre.toLocaleLowerCase().includes(titreToFilter.toLocaleLowerCase())))

  }

  useEffect(() => {
    if (titreToFilter != null) {
      filterTitre()
    }

  },[titreToFilter])

  return (
    <div className='flex flex-col gap-4' >

      <Addmovieform addmovie={addMovie} />
      <MovieCard movies={movies} />
      <Filter filterTitre={setTitreToFilter} />
      <div>
        <table className='w-full'>
          <thead>
            <tr className='font-medium'>
              <td>Titre</td>
              <td>Description</td>
              <td>posterURL</td>
              <td>Note</td>
            </tr>
          </thead>
          <tbody>
            {
              (titreToFilter !== "") ? filteredByTitre.map((movie, index) => (
                <tr key={index} className='font-medium'>
                  <td>{movie.titre}</td>
                  <td>{movie.description}</td>
                  <td>{movie.posterURL}</td>
                  <td>{movie.note}</td>
                </tr>
              )) : movies.map((movie, index) => (
                <tr key={index} className='font-medium'>
                  <td>{movie.titre}</td>
                  <td>{movie.description}</td>
                  <td>{movie.posterURL}</td>
                  <td>{movie.note}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
