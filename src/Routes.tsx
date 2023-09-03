import { useRoutes } from 'react-router-dom';

import Intro from './Intro';
import Buy from './Buy';

const MainRoutes = () => {
    const mainRoutes = [
     {
      path: '/',
      children: [
        {
          path: '/',
          element: <Intro />,
        },
        {
          path: '/buy',
          element: <Buy />,
        }
      ]
     }
    ];

    return (useRoutes(mainRoutes));
  };
  
  export default MainRoutes;