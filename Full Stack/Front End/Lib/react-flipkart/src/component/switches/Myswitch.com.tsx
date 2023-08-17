import { Switch } from "@mui/material"
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Myswitch:React.FC<{}>=()=>{
return<><Switch {...label} defaultChecked />
<Switch {...label} />
<Switch {...label} disabled defaultChecked />
<Switch {...label} disabled /></>
}