import { Box, Paper, Toolbar } from "@mui/material"
import { Myregister } from "./Myregister.com"

export let Register:React.FC<{}>=()=>{
    return <Box>
        <Paper>
            <Toolbar></Toolbar>
            <Myregister/>
        </Paper>
    </Box>
}