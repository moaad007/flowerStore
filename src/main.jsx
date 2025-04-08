import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider,createHashRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';
import ErrorPage from './pages/errorpage';


const router = createHashRouter([

    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/products", element: <Products /> },
    { path: "*", element: <ErrorPage /> }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
