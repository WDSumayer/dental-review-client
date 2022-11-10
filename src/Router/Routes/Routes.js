import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import MyReviews from "../../pages/MyReviews/MyReviews";
import UpdateReview from "../../pages/MyReviews/UpdateReview";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('https://dental-review-server.vercel.app/limitServices')
            },
            {
                path: '/services', element: <Services></Services>,
                loader: () => fetch('https://dental-review-server.vercel.app/services')
            },
            {
                path: '/serviceDetails/:id',
                loader: ({params}) => fetch(`https://dental-review-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/myreviews', element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/updateReview/:id', element: <UpdateReview></UpdateReview>,
                loader:({params}) => fetch(`https://dental-review-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/addServices', element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
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
