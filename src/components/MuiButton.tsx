import React from 'react';
import{ Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup }from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats, setFormats] = React.useState<string | null>(null);
    console.log(formats);
    const handleFormat = (_event: React.MouseEvent<HTMLElement>, newFormats: string | null) => {
        setFormats(newFormats);
    };
    return (
        <Stack spacing={4}  >
            <Stack spacing={2}  direction='row'>
                <Button variant="text" href='https://google.com'>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2}  direction='row'>
                <Button variant="contained" color='primary'>Primary</Button>
                <Button variant="contained" color='secondary'>secondary</Button>
                <Button variant="contained" color='error'>error</Button>
                <Button variant="contained" color='warning'>Warning</Button>
                <Button variant="contained" color='info'>info</Button>
                <Button variant="contained" color='success'>success</Button>
            </Stack>
            <Stack display='block' spacing={2}  direction='row'>
                <Button variant="contained" size="small">
                Small
                </Button>
                <Button variant="contained" size="medium">
                Medium
                </Button>
                <Button variant="contained" size="large">
                Large
                </Button>
            </Stack>
            <Stack spacing={2}  direction='row'>                
                {/* <Button variant="contained" startIcon={<SendIcon/>}>
                    Send
                </Button> */}
                <Button variant="contained" endIcon={<SendIcon/>} disableElevation>
                    Send
                </Button>
                <IconButton aria-label='send' color='success' onClick={()=> alert('send')}>
                    <SendIcon/>
                </IconButton>
            </Stack>
            <Stack  direction='row'>
                <ButtonGroup variant="contained">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" orientation='vertical'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={2}  direction='row'>
                <ToggleButtonGroup aria-label="text formatting"  value={formats} onChange={handleFormat} color="secondary"  exclusive orientation='vertical' size="small">
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>            
        </Stack>        
    );
};

export default MuiButton;