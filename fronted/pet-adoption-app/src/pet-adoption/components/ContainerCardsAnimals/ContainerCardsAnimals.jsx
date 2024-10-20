import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CardAnimal from '../CardAnimal/CardAnimal';
import { DataAnimals } from '../../data/DataAnimals/DataAnimals';
import './ContainerCardsAnimals.css';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';

const ContainerCardsAnimals = () => {
  const [animalToogle, setAnimalToogle] = React.useState(false);

  const handleAnimalToogle = () => setAnimalToogle(!animalToogle);

  return (
    <>
      <div className='flex justify-center mb-4'>
        <ButtonSwitch handleAnimalToogle={handleAnimalToogle} />
      </div>
      <Box sx={{ width: '100%', padding: '1rem' }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {animalToogle
          ?
            DataAnimals.cats.map((pet) => {return (<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}><CardAnimal pet={pet} /></Grid>)})
          :
            DataAnimals.dogs.map((pet) => {return (<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}><CardAnimal pet={pet} /></Grid>)})
          }
        </Grid>
      </Box>
    </>
  );
}

export default ContainerCardsAnimals;
