import { Favorite, FavoriteBorder } from "@mui/icons-material"
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Mycheckbox:React.FC<{}>=()=>{
    return<>
    
    <Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked /> <br />

    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    <Checkbox
      {...label}
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
    /></>
}