import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material" 
import { useState } from "react";

const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log({value});
    const handleChange  = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value);
    }

    return (
        <Box>
            <FormControl error>
                <FormLabel id="job-experience-group-label" >
                    Years of experiance
                </FormLabel>
                <RadioGroup
                    aria-labelledby="job-experience-group-label"
                    defaultValue="0-2"
                    value={value}
                    onChange={handleChange}
                    name="radio-buttons-group"
                    row
                    >
                    <FormControlLabel value="0-2" control={<Radio  color="secondary" size="small"/>} label="0-2" />
                    <FormControlLabel value="3-5" control={<Radio color="success"/>} label="3-5" />
                    <FormControlLabel value="6-10" control={<Radio color="error" size="large"/>} label="6-10" />
                </RadioGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>        
        </Box>
    );
};

export default MuiRadioButton;