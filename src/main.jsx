import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './components/home/Home';
import Error from './components/error/Error';
import BookDetails from './components/home/BookDetails';
import ListedBooks from './components/listed page/ListedBooks';
import PageRead from './components/pages to read/PageRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/pages-to-read",
        element: <PageRead></PageRead>,
        loader: ()=> fetch('/data.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)