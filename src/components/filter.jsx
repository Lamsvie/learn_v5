import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Filter = ({filterTitre}) => {

    const [titre, setTitre] = useState("")

    useEffect(()=> {
        filterTitre(titre)
    },[titre])

    return (
        <div>
            <form action="">
                <div className='flex gap-2'>
                    <label htmlFor="">Titre : </label>
                    <input value={titre} onChange={(e) => setTitre(e.target.value)}  className='p-1 border-2 rounded-md' type="text" />
                    
                </div>
            </form>
        </div>
    );
}

export default Filter;
