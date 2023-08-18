import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material"
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

export const Myradio: React.FC<{}> = () => {
  return <><RadioGroup name="use-radio-group" defaultValue="first">
    <FormControlLabel value="first" label="First" control={<Radio />} />
    <FormControlLabel value="second" label="Second" control={<Radio />} />
  </RadioGroup><br />

    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl></>


}