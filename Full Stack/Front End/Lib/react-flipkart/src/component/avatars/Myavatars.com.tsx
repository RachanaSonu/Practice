import { Avatar, Stack } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment'
import { green, pink } from "@mui/material/colors";

export const Myavatars:React.FC<{}>=()=>{
    return<> <Stack direction="row" spacing={2}>
    <Avatar>
      <FolderIcon />
    </Avatar>
    <Avatar sx={{ bgcolor: pink[500] }}>
      <PageviewIcon />
    </Avatar>
    <Avatar sx={{ bgcolor: green[500] }}>
      <AssignmentIcon />
    </Avatar>
  </Stack><br />


  <Stack direction="row" spacing={2}>
      <Avatar
        alt="ayo"
        src="/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      {/* <Avatar alt="hi" src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg" />
       */}

<Avatar alt="hi" src="/3" />
      
      <Avatar
        alt="yoo"
        src='https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg'
        sx={{ width: 56, height: 56 }}
      />
    </Stack></>
}