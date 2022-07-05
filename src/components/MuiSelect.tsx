import React, { useState } from 'react';
import {Box, TextField, MenuItem} from "@mui/material";

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    console.log(countries);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setCountries(typeof value === "string" ? value.split(',') : value);
    }
    return (
        <Box width="250px">
            <TextField
            label="Select Country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
                multiple: true
            }}
            error
            size='small'
            color='secondary'
            helperText={!countries ? "Must Select one among the list" : "Please select countries where you want to work."}
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
                <MenuItem value='CA'>Canada</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
            </TextField>            
        </Box>
    );
};

export default MuiSelect;