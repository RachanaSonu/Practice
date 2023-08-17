import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
export const Flaoating:React.FC<{}>=()=>{
    return <> 
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab> &nbsp;
<Fab color="secondary" aria-label="edit">
  <EditIcon />
</Fab> &nbsp;
<Fab variant="extended">
  <NavigationIcon sx={{ mr: 1 }} />
  Navigate
</Fab> &nbsp;
<Fab disabled aria-label="like">
  <FavoriteIcon />
</Fab></>
}