import { useRoutes } from "react-router-dom"
import { Projectapp} from "./Project.router"

export let Allroutes=()=>{

    return useRoutes([Projectapp])
}