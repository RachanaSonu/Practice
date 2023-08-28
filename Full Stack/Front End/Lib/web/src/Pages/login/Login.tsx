import { Box, Paper, Toolbar } from "@mui/material"
import { Mylogin } from "./Mylogin.com"


export let Login:React.FC<{}>=()=>{
    return <Box>
        <Paper>
            <Toolbar></Toolbar>
            <Mylogin/>
        </Paper>
    </Box>
    
}