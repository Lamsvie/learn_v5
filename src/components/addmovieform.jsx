import React from 'react';
import { useState } from 'react';

const Addmovieform = ({addmovie}) => {

    const [titre, setTitre] = useState("")
    const [description, setDescription] = useState("")
    const [posterURL, setposterURL] = useState("")
    const [note, setNote] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addmovie({
            titre, description, posterURL, note
        })
        

        setTitre("")
        setDescription("")
        setposterURL("")
        setNote("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="" className='flex items-center gap-2 w-fit'>
                <div>
                <label htmlFor="" className='font-medium'>Movie Name: </label>
                <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} className='p-2 border h-5 rounded-md' />
                </div>
                <div>
                <label htmlFor="" className='font-medium'>Description: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='p-2 border h-5 rounded-md' />
                </div>
                <div>
                <label htmlFor="" className='font-medium'>MovieURL: </label>
                <input type="text" value={posterURL} onChange={(e) => setposterURL(e.target.value)} className='p-2 border h-5 rounded-md' />
                </div>
                <div>
                <label htmlFor="" className='font-medium'>Note: </label>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className='p-2 border h-5 rounded-md' />
                </div>
                <button type='submit' className='bg-blue-500 p-2 rounded-lg text-white'>Ajouter</button>
            </form>
        </div>
    );
}

export default Addmovieform;
