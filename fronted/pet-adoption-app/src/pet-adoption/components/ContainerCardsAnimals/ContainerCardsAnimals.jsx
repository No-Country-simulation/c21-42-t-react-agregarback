import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CardAnimal from '../CardAnimal/CardAnimal';
import './ContainerCardsAnimals.css';

const ContainerCardsAnimals = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CardAnimal />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CardAnimal />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CardAnimal />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CardAnimal />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContainerCardsAnimals;
