import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material" 

const MuiRadioButton = () => {
    return (
        <Box>
            <FormControl>
                <FormLabel id="job-experience-group-label">
                    Years of experiance
                </FormLabel>
                <RadioGroup
                    aria-labelledby="job-experience-group-label"
                    defaultValue="0-2"
                    name="radio-buttons-group"
                    >
                    <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
                    <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
                    <FormControlLabel value="6-10" control={<Radio />} label="6-10" />
                </RadioGroup>
            </FormControl>        
        </Box>
    );
};

export default MuiRadioButton;