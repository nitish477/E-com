import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home';
import AddProduct from './view/AddProduct/AddProduct';
import Details from './view/Details/Details';
import UpdateProduct from './view/UpdateProduct/UpdateProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/addproduct',
    element:<AddProduct/>
  },
  {
    path:'/details/:id',
    element:<Details/>
  },
  {
    path:'/updateproduct/:id',
    element:<UpdateProduct/>
  }
])
root.render(
     <RouterProvider router={router}/>
);

