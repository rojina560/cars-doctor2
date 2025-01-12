import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login";
import SignUp from "../Pages/Home/SignUp";
import Checkout from "../Pages/Checkout/Checkout";

const  router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        { 
            path: '/',
            element: <Home></Home>

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
    }
]

}])
export default router