import { ToggleButton, ToggleButtonGroup } from "@mui/material"

export const Mytoggle:React.FC<{}>=()=>{
    return <><ToggleButtonGroup
    color="primary"
    //value={alignment}
    exclusive
    //onChange={handleChange}
    aria-label="Platform"
  >
    <ToggleButton value="web">Web</ToggleButton>
    <ToggleButton value="android">Android</ToggleButton>
    <ToggleButton value="ios">iOS</ToggleButton>
  </ToggleButtonGroup></>
}