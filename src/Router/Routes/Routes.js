import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/limitServices')
            },
            {
                path: '/services', element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/serviceDetails/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            }
        ]
    }
])
