import React from 'react';
import './CardAnimal.css';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardAnimal = () => {
  return (
    <article className='p-2 blue-color-background text-white rounded-lg border-card width-100'>
        <div className='flex justify-between items-center mb-3 mt-1'>
            <h2 className='font-medium'>Gyoza</h2>
            <div>
                <a href="#">
                  <ShareIcon className='me-5' />
                </a>
                <a href="#">
                  <FavoriteIcon className='me-2' />
                </a>
            </div>
        </div>
        <div>
          <img src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="Gyoza" className='width-100 height-auto rounded-lg border-image' />
        </div>
        <div>
          <div className='flex mt-3'>
            <h4>Sexo:&nbsp;</h4>
            <p className='font-light'>Hembra</p>
          </div>
          <div className='flex mt-1'>
            <h4>Edad:&nbsp;</h4>
            <p className='font-light'>10 años</p>
          </div>
          <div className='flex mt-1'>
            <h4>Tamaño:&nbsp;</h4>
            <p className='font-light'>Mediana</p>
          </div>
          <div className='text-center mt-2'>
            <a href="#" className='rounded-lg inline-block width-100 p-2 blue-dark-background-color'>Ver más</a>
          </div>
        </div>
    </article>
  );
};

export default CardAnimal;