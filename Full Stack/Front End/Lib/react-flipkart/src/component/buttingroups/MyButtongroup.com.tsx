import { Button, ButtonGroup } from "@mui/material"
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];
export const MyButtonGroup: React.FC<{}> = () => {
  return <><ButtonGroup size="small" aria-label="small button group">
    {buttons}
  </ButtonGroup><br /><br />
    <ButtonGroup color="secondary" aria-label="medium secondary button group">
      {buttons}
    </ButtonGroup><br /><br />
    <ButtonGroup size="large" aria-label="large button group">
      {buttons}
    </ButtonGroup></>
}