import React from 'react';
import Typography from '@mui/material/Typography';

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2' gutterBottom>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4'>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2'>subtitle2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus tempora quidem repudiandae delectus? Iste ut totam quisquam molestias maxime dignissimos officia dolorum, velit ducimus fugiat deserunt odit et placeat.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt ipsum explicabo necessitatibus. Libero ex laborum exercitationem esse ipsum autem suscipit recusandae aspernatur ut officia. Repudiandae rem eaque quasi similique!</Typography>
        </div>
    );
};

export default MuiTypography;