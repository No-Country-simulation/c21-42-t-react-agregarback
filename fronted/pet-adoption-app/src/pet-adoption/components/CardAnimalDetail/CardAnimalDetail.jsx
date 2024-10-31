import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './CardAnimalDetail.css';

const CardAnimalDetail = ({ petDetail }) => {
    const [idButton, setIdButton] = useState(1);

    const backgroundColorGeneral = () => setIdButton(1);

    const backgroundColorHealth = () => setIdButton(2);

    const backgroundColorHistory = () => setIdButton(3);

    return (
        <div className='h-screen'>
            <div className="bg-[#F4F0EF] text-2xl flex flex-col gap-y-4">
                <div className='flex justify-center justify-start-25rem4375'>
                    <h1 className='text-[2rem] font-semibold'>{petDetail.name}</h1>
                </div>
                <div className='flex justify-center'>
                    <img className='w-96 rounded-lg border-image' src={petDetail.image} alt={petDetail.name} />
                </div>
                <div>
                    <ShareIcon sx={'color: #ADAAAA'} />
                    &nbsp;
                    &nbsp;
                    <FavoriteIcon sx={'color: #ADAAAA'} />
                </div>
                <div className='text-[1.0625rem] flex gap-x-4'>
                    <button className={idButton === 1 ? 'bg-[#E89C19] text-[#342200] border rounded-md border-solid border-[#E89C19] py-1.5 px-3' : 'text-[#484646] border rounded-md border-solid border-[#E89C19] py-1.5 px-3'} onClick={backgroundColorGeneral}>General</button>
                    <button className={idButton === 2 ? 'bg-[#E89C19] text-[#342200] border rounded-md border-solid border-[#E89C19] py-1.5 px-3' : 'text-[#484646] border rounded-md border-solid border-[#E89C19] py-1.5 px-3'} onClick={backgroundColorHealth}>Salud</button>
                    <button className={idButton === 3 ? 'bg-[#E89C19] text-[#342200] border rounded-md border-solid border-[#E89C19] py-1.5 px-3' : 'text-[#484646] border rounded-md border-solid border-[#E89C19] py-1.5 px-3'} onClick={backgroundColorHistory}>Historia</button>
                </div>
                <div>
                    {idButton === 1 &&
                        <div className='flex flex-col gap-y-2'>
                            <div>
                                <h4 className='inline-block font-semibold text-xl text-[#484646]'>Sexo:</h4>
                                &nbsp;
                                <p className='inline-block font-normal text-base text-[#484646]'>{petDetail.gender}</p>
                            </div>
                            <div>
                                <h4 className='inline-block font-semibold text-xl text-[#484646]'>Edad:</h4>
                                &nbsp;
                                <p className='inline-block font-normal text-base text-[#484646]'>{petDetail.age} años</p>
                            </div>
                            <div>
                                <h4 className='inline-block font-semibold text-xl text-[#484646]'>Tamaño:</h4>
                                &nbsp;
                                <p className='inline-block font-normal text-base text-[#484646]'>{petDetail.size}</p>
                            </div>
                        </div>
                    }
                    {idButton === 2 &&
                        <div className='text-base'>
                            <ul className='list-disc ml-6'>
                                <li>
                                    Vacuna contra moquillo canino
                                </li>
                                <li>
                                    Vacuna contra parvovirosis
                                </li>
                                <li>
                                    Vacuna para rabia
                                </li>
                            </ul>
                        </div>
                    }
                    {idButton === 3 &&
                        <div className='text-base'>
                            <p>
                                Sojita es una perrita de 4 años con una historia difícil. Antes de ser rescatada, no recibió el amor ni los cuidados que necesitaba, lo que la hizo un poco reservada. Con el tiempo y mucho cariño, Sojita ha dejado atrás ese pasado y ahora es una perrita llena de vida, curiosa y muy cariñosa.
                            </p>
                        </div>
                    }
                </div>
            </div>
            <a href="#" className='rounded-lg inline-block width-100 p-2 blue-dark-background-color text-white text-center text-base mt-auto'>Contactar</a>
        </div>
    );
};

export default CardAnimalDetail;