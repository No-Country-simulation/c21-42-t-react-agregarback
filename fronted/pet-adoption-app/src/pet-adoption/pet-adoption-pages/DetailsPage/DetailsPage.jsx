import React from 'react';
import CardAnimalDetail from '../../components/CardAnimalDetail/CardAnimalDetail';
import ArrowBackIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = (e) => {
    const navigate = useNavigate(),
    state = useSelector(state => state);

    const navigateToPets = (e) => {
        e.preventDefault();

        navigate('/home-adopt');
    }

    return (
        <div className="bg-[#F4F0EF] text-2xl text-[#605E5E] py-5 px-3">
            <header className='font-semibold mb-2'>
                <a className='block' href="#" onClick={navigateToPets}><ArrowBackIcon />&nbsp;&nbsp;&nbsp;Mascotas</a>
            </header>
            <CardAnimalDetail petDetail={state.pet} />
        </div>
    );
};

export default DetailsPage;