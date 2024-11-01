import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendPetInformation } from '../../../actions/petActions';
import './CardAnimal.css';

const CardAnimal = ({ pet }) => {
  const navigate = useNavigate(),
  dispatch = useDispatch();

  const navigateToPetDetails = (e) => {
    e.preventDefault();

    dispatch(sendPetInformation(pet));

    navigate('/pet-details');
  }

  return (
    <article className='p-2 blue-color-background text-white rounded-lg border-card width-100 flex flex-col'>
        <div className='flex justify-between items-center mb-3 mt-1'>
            <h2 className='font-medium'>{pet.name}</h2>
            <div>
                <a href="#">
                  <ShareIcon className='me-5' />
                </a>
                <a href="#">
                  <FavoriteIcon className='me-2' />
                </a>
            </div>
        </div>
        <div className='grow flex flex-col'>
          <img src={pet.firstImg} alt={pet.name} className='width-100 height-auto rounded-lg border-image grow' />
        </div>
        <div>
          <div className='flex mt-3'>
            <h4>Sexo:&nbsp;</h4>
            <p className='font-light'>{pet.gender}</p>
          </div>
          <div className='flex mt-1'>
            <h4>Edad:&nbsp;</h4>
            <p className='font-light'>{pet.age} años</p>
          </div>
          <div className='flex mt-1'>
            <h4>Tamaño:&nbsp;</h4>
            <p className='font-light'>{pet.size}</p>
          </div>
          <div className='text-center mt-2'>
            <a href="#" className='rounded-lg inline-block width-100 p-2 blue-dark-background-color' onClick={navigateToPetDetails}>Ver más</a>
          </div>
        </div>
    </article>
  );
};

export default CardAnimal;