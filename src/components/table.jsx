import React from 'react';

const Table = ({titreToFilter,filteredByTitre,movies}) => {
    return (
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
              (titreToFilter !== "") ? filteredByTitre.map((movie) => (
                <tr key={movie.id} className='font-medium'>
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
    );
}

export default Table;
