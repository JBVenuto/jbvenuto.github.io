import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
//Pages to use with the router
import Main from './pages/Main';
import ArtGenerator from './pages/ArtGenerator';
import Lights from './pages/Lights';
import PublessTrivia from './pages/PublessTrivia';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/lights',
    element: <Lights />,
  },
  {
    path: '/publesstrivia',
    element: <PublessTrivia />,
  },
  {
    path: '/artgenerator',
    element: <ArtGenerator />,
  },
])

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export default App;