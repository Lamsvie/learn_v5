import React from 'react';
import Addmovieform from './addmovieform';
import MovieCard from './movieCard';
import Filter from './filter';
import Table from './table';

import { useState, useEffect } from 'react';

const Home = () => {

    const [movies, setMovies] = useState([
        {
          id: 1,
          titre: "Fast and furious",
          description: "It's a good movie",
          posterURL: "https://movies/fast&furious",
          note: "2/5"
        },
        {
            id: 2,
          titre: "Blanche neige",
          description: "It's a good movie",
          posterURL: "https://movies/blancheneige",
          note: "3/5"
        },
        {
          id: 3,
          titre: "Vikings",
          description: "It's a good movie",
          posterURL: "https://movies/vikings",
          note: "5/5"
        },
        {
          id: 4,
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
      <Table titreToFilter={titreToFilter} filteredByTitre={filteredByTitre} movies={movies} />
    </div>
    );
}

export default Home;
