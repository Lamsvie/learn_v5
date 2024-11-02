import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Description = () => {

    const movies =  [
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
      ]
    const params = useParams()
    
    const [filtered, setFiltered] = useState(null)

    useEffect(() => {
        setFiltered(movies.filter(movie => movie.id == params.id ))
    },[params])

    return (
        <div>
            {
                filtered != null ? filtered.map(movie => (
                    <div key={movie.id} className='flex flex-col gap-4 justify-between mx-auto w-fit'>
                        <div>
                            <h1> {movie.titre} </h1>
                            <h2> {movie.description} </h2>
                            <a href=""> {movie.posterURL} </a>
                            <span> {movie.note} </span>
                        </div>

                        <button className='bg-blue-500 text-white w-fit p-2 rounded-md' ><Link to={'/'}>return</Link></button>
                    </div>
                )) : ( <div>
                    <h1>Introuvable</h1>
                    <button><Link to={'/'}>Home</Link></button>
                </div> )
            }
            
        </div>
    );
}

export default Description;
