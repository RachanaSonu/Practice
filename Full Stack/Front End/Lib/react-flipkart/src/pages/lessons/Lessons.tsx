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
import { Myprop } from '../../component/prop/Myprop.com';
import { Myhook } from '../../component/hook/Myhook.com';
import { Normalcss } from '../../component/CSS/Normalcss.com';
import { Css_container } from '../../component/CSS/Css_container.com';


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



export const Lessons: React.FC<{}> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fragement" />
          <Tab label="Component" />
          <Tab label="Props(gift)" />
          <Tab label="Hooks" />
          <Tab label="Strick Mode" />
          <Tab label="CSS" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Fragement</h1>
        <Fragement />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

        <h1>Autocomplete</h1>
        <p>The autocomplete is a normal text input enhanced by a panel of suggested options.</p>
        <Myautocomplete />

        <h1>Switch</h1>
        <p>Switches toggle the state of a single setting on or off.</p>
        <Myswitch />

        <h1>Speed Dial</h1>
        <p>When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.</p>
        <Myspeeddial />

        <h1>Toggle Button </h1>
        <p>A Toggle Button can be used to group related options.</p>
        <Mytoggle />

        <h1>Image List</h1>
        The Image List displays a collection of images in an organized grid.
        <Myimage />

        <h1>Avatar</h1>
        <p>Avatars are found throughout material design with uses in everything from tables to dialog menus.</p>
        <Myavatars />

        <h1>Checkbox</h1>
        <p>Checkboxes allow the user to select one or more items from a set.</p>
        <Mycheckbox />

        <h1>Radio</h1>
        <p>The Radio Group allows the user to select one option from a set.</p>
        <Myradio />

        <h1>Button Group</h1>
        <p>The ButtonGroup component can be used to group related buttons.</p>
        <MyButtonGroup />

        <h1>Stack</h1>
        <p>Stack is a container component for arranging elements vertically or horizontally.</p>
        <Mystack />

        <h1>Buttons</h1>
        <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
        <Mybuttons />

        <h1>Floating Buttons</h1>
        <p>A Floating Action Button (FAB) performs the primary, or most common, action on a screen.</p>
        <Flaoating />

        <h1>Rating</h1>
        <p>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.</p>
        <Myrating />

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h1>Props</h1>
        <p>Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.

          Props are immutable so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.

          When you need immutable data in the component, you have to add props to reactDom.render() method in the main.js file of your ReactJS project and used it inside the component in which you need. </p>
        <Myprop />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <h1>Hooks</h1>
        <p>React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
          React provides a bunch of standard in-built hooks: <br />

          useState: To manage states. Returns a stateful value and an updater function to update it. <br /> <br />
          useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more. <br /> <br />
          useContext: To return the current value for a context. <br /> <br />
          useReducer: A useState alternative to help with complex state management. <br /> <br />
          useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily. <br /> <br />
          useMemo: It returns a memoized value that helps in performance optimizations. <br /> <br />
          useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively. <br /> <br />
          useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously. <br /><br />
          useDebugValue: Helps to display a label in React DevTools for custom hooks.</p>
        <Myhook />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <h1>Strick Mode</h1>
        <p></p>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <h1>Different ways of CSS</h1>
        <p></p>
        <Css_container/>
      </CustomTabPanel>
    
    </Box>
  );
}