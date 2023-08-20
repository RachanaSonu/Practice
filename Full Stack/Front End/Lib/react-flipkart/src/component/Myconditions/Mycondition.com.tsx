import { useState } from "react"

export const Mycondition:React.FC<{}>=()=>{
    //let [imworking,yettowork]=useState(false)
    let [imworking,yettowork]=useState(true)
    return<><h3>If Condition</h3>
    {imworking==true?<>i will gift</>:<>No gift</>}
    </>
}