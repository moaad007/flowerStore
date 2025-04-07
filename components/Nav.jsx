import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <>
            <div className="logo flex place-content-between bg-transparent text-black p-4">
                <h1 className="text-3xl font-bold">Flower Store</h1>
            <ul className="nav-list flex justify-center items-center bg-transparent text-black p-4 gap-10">
                <Link to={'./'}> <li className="nav-item">Home</li>  </Link>
                <Link to={'./about'}> <li className="nav-item">About</li> </Link>
                <Link to={'./products'}> <li className="nav-item">Products</li>  </Link>
                <Link to={'./contact'}>  <li className="nav-item">Contact</li> </Link>
            </ul>
            </div>
        </>
    );
};

export default Nav;