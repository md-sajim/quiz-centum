import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './componant/Topics/Topics';
import Statistics from './componant/Statistics/Statistics';
import Bolge from './componant/Bolge/Bolge';
import Quizs from './componant/Quizs/Quizs';
import Home from './componant/Home/Home';
import NotFound from './componant/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Home></Home>
        },
        {
          path: "topic",
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>
        },
        {
          path: "statistics",
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
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
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
