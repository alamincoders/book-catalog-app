import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/App';
import BookDetails from '../pages/BookDetails';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

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
        path: '/book/:id',
        element: (
          // <PrivateRoute>
          <BookDetails />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
