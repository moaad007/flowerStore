import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <>
            <div className="logo flex place-content-between bg-transparent text-black p-4">
                <h1 className="text-3xl font-bold">Flower Store</h1>
                <ul className="nav-list flex justify-center items-center bg-transparent text-black p-4 gap-10">
  <li className="nav-item"><Link to="/">Home</Link></li>
  <li className="nav-item"><Link to="/about">About</Link></li>
  <li className="nav-item"><Link to="/products">Products</Link></li>
  <li className="nav-item"><Link to="/contact">Contact</Link></li>
</ul>

            </div>
        </>
    );
};

export default Nav;