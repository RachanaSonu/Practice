export const App:React.FC=()=>{
  
  return <div>
    
    <h1>Hello</h1>
  <p>hello all</p>
  <Rnc></Rnc>
  {rachana()}
  {/* {Rnc()} */}
  
  </div>
}

function rachana(){
  console.log("im human")
  return "having food"
}

function Rnc(){
  return <p>fjfdhhdshdsfkhdsjgjggj</p>
}