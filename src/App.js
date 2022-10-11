import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './componant/Topics/Topics';
import Statistics from './componant/Statistics/Statistics';
import Bolge from './componant/Bolge/Bolge';
import Quizs from './componant/Quizs/Quizs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Bolge></Bolge>
        },
        {
          path:"quizs/:id",
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quizs></Quizs>
        }
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
