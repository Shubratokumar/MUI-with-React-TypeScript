import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material" 
import { useState } from "react";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const MuiCheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({acceptTnc});
    console.log({skills});

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAcceptTnc(event.target.checked);
    }
    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const index = skills.indexOf(event.target.value);
        if(index === -1){
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }

    }

    return (
        <Box>
            <Box>
                <FormControlLabel control={<Checkbox checked={acceptTnc} onChange={handleCheck} color="secondary"/>} label="I accept the terms and conditions." />
            </Box>
            <Box>
                <Checkbox
                color="secondary"
                icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                checked={acceptTnc} onChange={handleCheck}
                ></Checkbox>
            </Box>
            <Box>
                <FormControl  error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel value='html' control={<Checkbox checked={skills.includes('html')} onChange={handleSkillsChange} color="secondary"/>} label="HTML" />                        
                        <FormControlLabel value='css' control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} color="secondary"/>} label="CSS" />                        
                        <FormControlLabel value='javascript' control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillsChange} color="secondary"/>} label="JavaScript" />                        
                    </FormGroup>

                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiCheckbox;