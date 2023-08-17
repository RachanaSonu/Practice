import { Button } from "@mui/material"

export const Mybuttons:React.FC<{}>=()=>{
    return <>
    <button>click me</button><br /><br/>
    <Button variant="contained" color="success">
  Success
</Button> &nbsp;
<Button variant="outlined" disabled>
  Disabled
</Button>
</>
    
}