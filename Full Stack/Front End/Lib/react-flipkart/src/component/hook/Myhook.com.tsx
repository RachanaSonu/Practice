import Button from "@mui/material/Button"
import { useEffect, useState } from "react"

export const Myhook:React.FC<{}>=()=>{
//ashwini()

    let [val,setVal]=useState<string|number>(0)
 useEffect(()=>{
     setVal(20)
 },[])
//console.log(setVal,val)

let handleclick=()=>{
    alert("got it")
}


    return<>

    {/* interview question */}
    <input type="text" onChange={(e)=>{console.log(e.target.value);setVal(e.target.value)}} /><br/>
    <Button onClick={handleclick}>Click Me</Button>
    {val}
    </>
}

// let ashwini=()=>{
//          let data=0
//          let dataSetter:any=(val:any)=>{
//      data=val
//      return data
//          }
//          return [data,dataSetter]
//     }