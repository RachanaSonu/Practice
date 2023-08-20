import { useState } from "react"


export const Myevent:React.FC<{}>=()=>{

    let [userData,setUserdata]=useState(["a","b","c"])
    
    let handle=(e:any)=>{
        console.log(e.target.value) 
        setUserdata([...userData,e.target.value])
    }
    return<>
    <input type="text"  onChange={handle}/>
    {userData?.map((item)=>{return<div>{item}</div>})}
    </>
}