import React from 'react';
import{ Stack, TextField, InputAdornment, IconButton }from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const MuiTextField = () => {
    const [value, setValue] = useState<string>('');
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField  label='Name' variant='outlined' />
                <TextField  label='Name' variant='filled' error />
                <TextField  label='Name' variant='standard' />
            </Stack>            
            <Stack direction='row' spacing={2}>
                <TextField  label='Small Secondary' size='small' color='secondary' />
            </Stack>            
            <Stack direction='row' spacing={2}>
                <TextField  label='Form Input' required value={value} onChange={e => setValue(e.target.value)} color='secondary'  error={!value}  helperText={!value ?  "Required" : "Do not share your password with anyone."} />
                <TextField  label='Disable' disabled color='secondary' />
                <TextField  label='Read Only'  inputProps={{readOnly: true}} color='secondary' />
            </Stack>            
            <Stack direction='row' spacing={2}>
                <TextField  label='Password' type='password' required color='secondary'  helperText='Do not share your password with anyone'/>
            </Stack>            
            <Stack direction='row' spacing={2}>
                <TextField  label='Amount' 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField  label='Weight'
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                />
                <TextField  label='Password' type='password'
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                >
                                <VisibilityOff />
                            </IconButton>
                        </InputAdornment>,
                    }}
                />
            </Stack>            
        </Stack>
    );
};

export default MuiTextField;