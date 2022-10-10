
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import StatChart from './components/StatChart/StatChart';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statchart',
          element: <StatChart></StatChart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <div><h4>Ops</h4></div>

    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
