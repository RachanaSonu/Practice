// export const App:React.FC=()=>{

//import { BrowserRouter,Route,Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
// import { Home } from "./pages/home/Home"
// import { Lessons } from "./pages/lessons/Lessons"
// import { Login } from "./pages/login/Login"
// import { Register } from "./pages/register/Register"
//import { Nav } from "./component/navbar/Nav"
import { Allroutes } from "./routes"
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


//   return <div>

//     <h1>Hello</h1>
//   <p>hello all</p>
//   <Rnc></Rnc>
//   {rachana()}
//   {/* {Rnc()} */}

//   </div>
// }

// function rachana(){
//   console.log("im human")
//   return "having food"
// }

// function Rnc(){
//   return <p>fjfdhhdshdsfkhdsjgjggj</p>
// }

export const App: React.FC = () => {

  return <>

    <BrowserRouter><Allroutes />

      {/* <Nav/>
<Routes>
{/* <Route path="/home" element={<Home/>} /> */}
      {/* <Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/lessons" element={<Lessons/>} />

</Routes> */}
    </BrowserRouter>
    {/* <Home/>
  <Login/>
  <Register/>
  <Lessons/> */}

  </>
}