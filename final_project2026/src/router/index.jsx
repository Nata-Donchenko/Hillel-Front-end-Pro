import { createBrowserRouter } from "react-router";
import HomePage from "@pages/HomePage";
import MainLayout from "@layouts";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'category/:categoryName',
        element: <div>Product Page</div>,
      },
      {
        path: 'product/:productId',
        element: <div>Product Page</div>,
      },
      {
        path: 'cart',
        element: <div>Cart Page</div>,
      }
    ]
  }
]);

export default routerConfig;
