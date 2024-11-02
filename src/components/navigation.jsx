import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav className='h-24 bg-slate-900 text-white flex gap-4 justify-center'>
                <Link to={'/'}>Home</Link>
                <Link to={'/description/id'} >Description</Link>
            </nav>
        </div>
    );
}

export default Navigation;
