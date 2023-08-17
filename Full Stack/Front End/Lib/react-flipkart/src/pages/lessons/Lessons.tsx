// import { Nav } from "../../component/navbar/Nav"

// export let Lessons:React.FC<{}>=()=>{
// return <div>
//     {/* <Nav/> */}
// <h1>Im Lessons Page</h1>
// </div>

// }

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import { Fragement } from '../../component/fragement/Fragement.com';
import { Mybuttons } from '../../component/mybuttons/Mybuttons.com';
import { Flaoating } from '../../component/flaoatingbutton/Flaoating.com';
import { Myrating } from '../../component/rating/Myrating.com';
import { Mycheckbox } from '../../component/Checkbox/Mycheckbox.com';
import { Myradio } from '../../component/Myradio/Myradio.com';
import { Mytoggle } from '../../component/toggle/Mytoggle.com';
import { Myswitch } from '../../component/switches/Myswitch.com';
import { Myautocomplete } from '../../component/autocomplete/Myautocomplete.com';
import { MyButtonGroup } from '../../component/buttingroups/MyButtongroup.com';
import { Myavatars } from '../../component/avatars/Myavatars.com';
import { Myimage } from '../../component/imagelist/Myimage.com';
import { Myspeeddial } from '../../component/speed dial/Myspeeddial.com';
import { Mystack } from '../../component/Stack/Mystack.com';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fragement" {...a11yProps(0)} />
          <Tab label="Component" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Fragement</h1>
        <Fragement/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      
      <h1>Buttons</h1>
        <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
        <Mybuttons/>
        
<h1>Floating Buttons</h1>
<p>A Floating Action Button (FAB) performs the primary, or most common, action on a screen.</p>
        <Flaoating/>

        <h1>Rating</h1>
        <p>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.</p>
        <Myrating/>


<h1>Checkbox</h1>
<p>Checkboxes allow the user to select one or more items from a set.</p>
        <Mycheckbox/>
        
        <h1>Radio</h1>
        <p>The Radio Group allows the user to select one option from a set.</p>
        <Myradio/>

    <h1>Toggle Button </h1>
    <p>A Toggle Button can be used to group related options.</p>
    <Mytoggle/>

<h1>Switch</h1>
<p>Switches toggle the state of a single setting on or off.</p>
<Myswitch/>

<h1>Autocomplete</h1>
<p>The autocomplete is a normal text input enhanced by a panel of suggested options.</p>
<Myautocomplete/>

<h1>Button Group</h1>
<p>The ButtonGroup component can be used to group related buttons.</p>
<MyButtonGroup/>

<h1>Avatar</h1>
<p>Avatars are found throughout material design with uses in everything from tables to dialog menus.</p>
<Myavatars/>

<h1>Image List</h1>
The Image List displays a collection of images in an organized grid.
<Myimage/>

<h1>Speed Dial</h1>
<p>When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.</p>
<Myspeeddial/>

<h1>Stack</h1>
<p>Stack is a container component for arranging elements vertically or horizontally.</p>
<Mystack/>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}