import React from 'react';

function Nav() {
    return (
        <>
            <div className="logo flex place-content-between bg-transparent text-black p-4">
                <h1 className="text-3xl font-bold">Flower Store</h1>
            <ul className="nav-list flex justify-center items-center bg-transparent text-black p-4 gap-10">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/products">Products</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
            </div>
        </>
    );
};

export default Nav;