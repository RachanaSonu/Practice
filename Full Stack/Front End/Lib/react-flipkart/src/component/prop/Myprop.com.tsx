export const Myprop:React.FC<{}>=()=>{
    return<> 

    <Parent imporve={"im gift"}/><br/>
    {Parent({imporve:'watch'})}<br/>
    {child()}
    </>
}
interface obj{imporve:any}
let Parent:React.FC<obj>=(props)=>{
    console.log("----",props.imporve)
    return<></>
    //return <>Im  parent child{props.imporve}</>
}

let child=()=>{
    return <></>
    //<>Im child</>
}