import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movies }) => {

    const navigate = useNavigate()

    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                movies.map((movie) => (
                    <button onClick={() => navigate(`/description/${movie.id}`)} key={movie.id} className='flex flex-col gap-2 hover:bg-white border bg-blue-200 p-8'>
                        <h1 className='text-xl font-semibold'>{movie.titre}</h1>
                        <p>{movie.description}</p>
                        <p><a>{movie.posterURL}</a></p>
                        <p>{movie.note}</p>
                    </button>
                ))
            }

        </div>

    );
}

export default MovieCard;
