import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CardAnimal from '../CardAnimal/CardAnimal';
import './ContainerCardsAnimals.css';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';

const ContainerCardsAnimals = () => {
  const [animalToogle, setAnimalToogle] = useState(false),
  [dataAnimals, setDataAnimals] = useState({ dogs: [], cats: [] });

  const handleAnimalToogle = () => setAnimalToogle(!animalToogle);

  let url = "https://citric-alliance-437622-k1.uk.r.appspot.com/api/pet-owner/pets",
  data = { dogs: [], cats: [] };

  useEffect(() => {
    async function searchPets() {
      try {
        let json1 = await fetch(url),
        json2 = await json1.json();

        for (let index = 0; index < json2.length; index++)
          index <= 15 ? data.dogs.push(json2[index]) : data.cats.push(json2[index]);

        setDataAnimals(data);
      } catch (error) {
        console.error(error);
      }
    }

    searchPets();
  }, [dataAnimals]);

  return (
    <>
      <div className='flex justify-center mb-4'>
        <ButtonSwitch handleAnimalToogle={handleAnimalToogle} />
      </div>
      <Box sx={{ width: '100%', padding: '1rem' }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {animalToogle
          ?
            dataAnimals.cats.map((pet) => {return (<Grid key={pet._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}><CardAnimal pet={pet} /></Grid>)})
          :
            dataAnimals.dogs.map((pet) => {return (<Grid key={pet._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}><CardAnimal pet={pet} /></Grid>)})
          }
        </Grid>
      </Box>
    </>
  );
}

export default ContainerCardsAnimals;
