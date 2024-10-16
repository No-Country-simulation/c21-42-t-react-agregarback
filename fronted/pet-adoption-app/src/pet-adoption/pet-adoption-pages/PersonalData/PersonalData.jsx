import React from 'react';
import UserForm from './UserForm/UserForm';
import BackButton from '../../components/BackButton/BackButton';

const PersonalData = () => {
    return(
        <div className="flex flex-col h-screen p-5 bg-[#F4F0EF]">
            <div className="flex justify-start items-center mb-9">
                <BackButton></BackButton>
                <h1 className="text-2xl font-semibold text-[#484646]">Datos Personales</h1>
            </div>
            <UserForm></UserForm>
        </div>
    );
};


export default PersonalData;