import Radio from "@mui/material/Radio";
import { default as RadioGroupMui } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material";

const CustomFormLabel = styled(FormLabel)({
  fontFamily: "Nunito Regular",
  fontStyle: "normal",
  lineHeight: "26px",
  fontWeight: 400,
  fontSize: 16,
  marginBottom: 10,
  color: "rgba(0, 0, 0, 0.87)",
});

const CustomRadio = styled(Radio)({
  color: "#D0CFCF",
  width: 20,
  height: 20,
  marginRight: 12,

  "&.MuiRadio-root": {
    [`&:checked, &.Mui-checked`]: {
      color: "#00BDD3",
    },
  },
});

const CustomFormControlLabel = styled(FormControlLabel)({
  marginLeft: 0,

  "&:not(:last-child)": {
    marginBottom: 7,
  },

  "& .MuiTypography-root": {
    fontFamily: "Nunito Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "26px",
  },
});

export const RadioGroup = ({ className }: { className?: string }) => {
  return (
    <div className={className} style={{ display: "inline-flex", flexDirection: "column" }}>
      <CustomFormLabel focused={false}>Select your position</CustomFormLabel>
      <RadioGroupMui defaultValue='Frontend developer'>
        <CustomFormControlLabel
          value='Frontend developer'
          label='Frontend developer'
          control={<CustomRadio />}
        />
        <CustomFormControlLabel
          value='Backend developer'
          label='Backend developer'
          control={<CustomRadio />}
        />
        <CustomFormControlLabel value='Designer' label='Designer' control={<CustomRadio />} />
        <CustomFormControlLabel value='QA' label='QA' control={<CustomRadio />} />
      </RadioGroupMui>
    </div>
  );
};
