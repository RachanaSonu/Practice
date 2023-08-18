import { Outlet } from "react-router-dom";
import { Lessons } from "../pages/lessons/Lessons";
//import { Nav } from "../component/navbar/Nav";

export let LessonsRoutes = {

    path: '/lessons',
    element: <div><Outlet /></div>,
    children: [
        {
            path: 'all',
            element: <Lessons />
        },
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