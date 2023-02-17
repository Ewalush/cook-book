import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSearch }) => {
    return (
        <header>
            <div className="navbar">
                <h1>Cook book</h1>
                <ul>
                    <h3>
                        Search:
                    </h3>
                    <li>
                        <input type="text" onChange={handleSearch} />
                    </li>
                    <li className='createButton'>
                        <Link to="/recipeForm/new">Create new</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;