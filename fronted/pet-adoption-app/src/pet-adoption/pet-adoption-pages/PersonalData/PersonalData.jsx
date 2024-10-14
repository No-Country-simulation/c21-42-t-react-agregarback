import React from 'react';
import UserForm from './UserForm/UserForm';

const PersonalData = () => {
    return(
        <div className="flex flex-col justify-around items-center h-screen p-5 bg-[#F4F0EF]">
            <div>
                <h1 className="text-2xl font-semibold text-[#484646]">Datos Personales</h1>
            </div>
            <UserForm></UserForm>
        </div>
    );
};


export default PersonalData;