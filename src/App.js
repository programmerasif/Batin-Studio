import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import CaseStudy from './Pages/CaseStudy';
import Contact from './Pages/Contact';
import Meeting from './Pages/Meeting';
import Article from './Pages/Article';
import ProductDetails from './Pages/ProductDetails';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Admin from './Pages/Admin';
import AuthContextProvider from './components/HooksFile/AuthContextProvider';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/CaseStudy',
    element: <CaseStudy />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/schedule-meeting',
    element: <Meeting />,
  },
  {
    path: '/article',
    element: <Article />,
  },
  {
    path: '/news',
    element: <Article />,
  },
  {
    path: '/product-detail',
    element: <ProductDetails />,
  },
  {
    path: "/admin",
    element: <Admin></Admin>
  }
]);

function App() {

  return <AuthContextProvider>
    <QueryClientProvider client={queryClient}> <RouterProvider router={router} /> </QueryClientProvider>
  </AuthContextProvider>
}

export default App;
