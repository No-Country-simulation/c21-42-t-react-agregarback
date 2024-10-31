import React, { useState } from 'react';
import './ButtonSwitch.css';

const ButtonSwitch = ({ handleAnimalToogle }) => {
    const [buttonSwitchToogle, setButtonSwitchToogle] = useState(false);

    const handleButtonSwitchToogle = () => {
        setButtonSwitchToogle(!buttonSwitchToogle);

        handleAnimalToogle();
    }

    return (
        <>
            <div className='flex bg-gray-color cursor-pointer rounded-3xl relative z-10 height-3rem items-center gap-x-4' onClick={handleButtonSwitchToogle}>
            {
            buttonSwitchToogle
            ?
            <>
                <div className='relative z-30 grow p-3 text-blue'><i class="fa-sharp fa-solid fa-dog"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className='relative z-30 grow p-3 text-white'><i class="fa-solid fa-cat"></i></div>
                <div className='bg-blue-color width-50 absolute z-20 height-3rem rounded-3xl translate-100 transition-all'></div>
            </>
            :
            <>
                <div className='relative z-30 grow p-3 text-white'><i class="fa-sharp fa-solid fa-dog"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className='relative z-30 grow p-3 text-blue'><i class="fa-solid fa-cat"></i></div>
                <div className='bg-blue-color width-50 absolute z-20 height-3rem rounded-3xl transition-all'></div>
            </>
            }
            </div>
        </>
    );
  }
  
  export default ButtonSwitch;