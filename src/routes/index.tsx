import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/App';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books2';
import BookForm from '../pages/CreateBook';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/allbooks',
        element: <Books />,
      },
      {
        path: '/book/:id',
        element: (
         // <PrivateRoute>
            <BookDetails />
          //</PrivateRoute>
        ),
      },
      {
        path: '/createbook',
        element: <BookForm />,
      },
    ],
  },
]);

export default router;
