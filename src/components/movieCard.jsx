import React from 'react';

const MovieCard = ({ movies }) => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                movies.map((movie, index) => (
                    <div key={index} className='flex flex-col gap-2 hover:bg-white border bg-blue-200 p-8'>
                        <h1 className='text-xl font-semibold'>{movie.titre}</h1>
                        <p>{movie.description}</p>
                        <p><a>{movie.posterURL}</a></p>
                        <p>{movie.note}</p>
                    </div>
                ))
            }

        </div>

    );
}

export default MovieCard;
