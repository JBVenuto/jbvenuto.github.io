import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
//Pages to use with the router
import Main from './pages/Main';
import ArtGenerator from './pages/ArtGenerator';
import Lights from './pages/Lights';
import PublessTrivia from './pages/PublessTrivia';
import XA from './pages/XA';
import ContextHubUI from './pages/ContextHubUI';
import AIExperiences from './pages/AIExperiences';
import TrackerCE from './pages/TrackerCE';

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
  // {
  //   path: '/xfinityassistant',
  //   element: <XA />
  // },
  // {
  //   path: '/contexthubui',
  //   element: <ContextHubUI />
  // },
  // {
  //   path: '/aiexperiences',
  //   element: <AIExperiences />
  // },
  // {
  //   path: '/trackerce',
  //   element: <TrackerCE />
  // }
])

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export default App;