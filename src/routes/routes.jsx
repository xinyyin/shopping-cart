import App from '../App';
import Home from '../components/home/Home';
import Shop from '../components/shop/Shop';
import Cart from '../components/cart/Cart';
import ErrorPage from '../components/errorPage/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
