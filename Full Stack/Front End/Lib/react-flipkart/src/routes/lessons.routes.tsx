import { Outlet } from "react-router-dom";
import { Nav } from "../component/navbar/Nav";


export let LessonsRoutes = {

    path: '/lessons',
    element: <div><Nav/><Outlet/></div>,
    children: [
        {
            path: 'home',
            element: <h1>Home</h1>
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