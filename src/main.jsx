import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from '../component/home.jsx';
import CountryDetails from '../component/CountryDetails.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <div>contact page</div>,
            },
            {
                path: "/:country",
                element: <CountryDetails></CountryDetails> ,
            },
        ],
    },
]);

const root = createRoot(document.getElementById('root'))

root.render(
    <>
        <RouterProvider router={router} />
    </>
)
