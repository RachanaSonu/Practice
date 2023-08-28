import { Outlet } from "react-router-dom";
import { Nav } from "../component/navbar/Nav";
import { Home } from "../pages/home/Home";

export let ProjectRoutes = {

    path: '/Project',
    element: <div><Nav/><Outlet/></div>,
    children: [
        {
            path: 'home',
            element: <Home/>
        },
        {
            path: 'login',
            element: <h1>login</h1>
        },
        {
            path: 'register',
            element: <h1>register</h1>
        }
    ]
}