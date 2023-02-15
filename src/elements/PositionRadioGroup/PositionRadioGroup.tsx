import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const PositionRadioGroup = () => {
  return (
    <FormControl>
      <FormLabel id="position-radio-buttons-group-label">
        Select your position
      </FormLabel>
      <RadioGroup
        aria-labelledby="position-radio-buttons-group-label"
        defaultValue="Frontend developer"
        name="position-radio-buttons-group"
      >
        <FormControlLabel
          value="Frontend developer"
          control={<Radio />}
          label="Frontend developer"
        />
        <FormControlLabel
          value="Backend developer"
          control={<Radio />}
          label="Backend developer"
        />
        <FormControlLabel
          value="Designer"
          control={<Radio />}
          label="Designer"
        />
        <FormControlLabel value="QA" control={<Radio />} label="QA" />
      </RadioGroup>
    </FormControl>
  );
};
