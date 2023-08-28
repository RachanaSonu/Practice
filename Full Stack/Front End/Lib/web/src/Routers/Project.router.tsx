
import { Outlet } from "react-router-dom";
import { Home } from "../Pages/home/Home.page";
import { Register } from "../Pages/register/Register";
import { Login } from "../Pages/login/Login";
import { ProjectLayout } from "../layout/ProjectLayout";


export let Projectapp= {
   
    path: '/project',
    element: <div><Outlet /></div>,
    children: [
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'register',
            element: <Register />
        },
        {
            path: 'login',
            element: <Login/>
        }
    ]
}