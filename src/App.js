import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './componant/Topics/Topics';
import Statistics from './componant/Statistics/Statistics';
import Bolge from './componant/Bolge/Bolge';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "topic",
          element: <Topics></Topics>
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Bolge></Bolge>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
