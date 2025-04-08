import React from 'react';
import Nav from '../../components/Nav';
const Products = () => {
    const cars = [
        { id: 1, name: 'Toyota Corolla', price: '$50/day' },
        { id: 2, name: 'Honda Civic', price: '$55/day' },
        { id: 3, name: 'Ford Mustang', price: '$100/day' },
    ];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Nav />
            <h1>Car Rental Products</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {cars.map((car) => (
                    <li
                        key={car.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <h2>{car.name}</h2>
                        <p>Price: {car.price}</p>
                        <button
                            style={{
                                backgroundColor: '#007BFF',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            onClick={() => alert(`You selected ${car.name}`)}
                        >
                            Rent Now
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;