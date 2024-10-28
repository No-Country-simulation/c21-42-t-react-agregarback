import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [exiting, setExiting] = useState(false); // Estado para manejar la salida
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 3) {
      setExiting(true); // Activa el estado de salida
      setTimeout(() => {
        setStep(step + 1);
        setExiting(false); // Desactiva el estado de salida después de la transición
      }, 300); // Duración de la transición
    } else {
      navigate('/login'); // Redirige al login en el último paso
    }
  };

  const skip = () => {
    navigate('/login'); // Redirige al login al presionar "Saltar"
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6">
        <img src='/OnboardingPage/logo.png' alt='logo' width={61} height={55} />
        <img src="/OnboardingPage/PetConnect.png" alt="PetConnect" width={211} height={39} />
        <img src='/OnboardingPage/close.png' alt='icon' width={61} height={55} />
      </div>

      <div
        className={`p-6 text-center mt-20 transition-all duration-300 ${exiting ? 'opacity-0 transform translate-x-10' : 'opacity-100 translate-x-0'}`}
      >
        {step === 1 && (
          <>
            <div className='relative'>
              <img src="/OnboardingPage/imagen1.png" alt="Onboarding 1" className="w-64 mx-auto mb-10" />
            </div>
            <p className="text-[24px] text-[#484646] font-semibold mb-5">¡Tu compañero te está esperando!</p>
            <p className="text-[16px] text-[#484646] text-left mb-8 ">
              <span className='font-semibold'>Encuentra a tu compañero ideal </span>
              y dale un hogar lleno de amor. Nuestra app
              <span className='font-semibold'> conecta a personas como tú con refugios</span> que cuidan a mascotas que necesitan ser adoptados.
            </p>
            <button onClick={nextStep} className="w-[380px] h-[50px] py-2 px-4 bg-blue-primary text-[16px] font-semibold text-[#E8F7FE] rounded-[12px] tracking-[2px]">Siguiente</button>
            <button onClick={skip} className="mt-4 text-[16px] text-secondary-orange underline">Saltar</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className='relative'>
              <img src="/OnboardingPage/Imagen2.png" alt="Onboarding 2" className="w-64 mx-auto mb-20" />
            </div>
            <p className="text-[24px] text-[#484646] font-semibold mb-10">Ayuda mascotas</p>
            <p className="text-[16px] text-[#484646] text-left mb-20 ">
              Publica a las mascotas que necesitan un nuevo hogar y ayuda a encontrarles una familia.
            </p>
            <button onClick={nextStep} className="w-[380px] h-[50px] py-2 px-4 bg-blue-primary text-[16px] font-semibold text-[#E8F7FE] rounded-[12px] tracking-[2px]">Siguiente</button>
            <button onClick={skip} className="mt-4 text-[16px] text-secondary-orange underline">Saltar</button>
          </>
        )}

        {step === 3 && (
          <>
            <img src="/OnboardingPage/imagen3.png" alt="Onboarding 3" className="w-64 mx-auto mb-20" />
            <p className="text-[24px] text-[#484646] font-semibold mb-10">¡Siempre cerca!</p>
            <p className="text-[16px] text-[#484646] text-left mb-8 ">
              Accede a consejos y contacto con veterinarios para el cuidado de tus mascotas.
            </p>
            <button onClick={nextStep} className="w-[380px] h-[50px] py-2 px-4 bg-blue-primary text-[16px] font-semibold text-[#E8F7FE] rounded-[12px] tracking-[2px]">Siguiente</button>
            <button onClick={skip} className="mt-4 text-[16px] text-secondary-orange underline">Saltar</button>
          </>
        )}
      </div>

      <div className="flex space-x-8 mt-8">
        <span className={`h-2 w-2 rounded-full ${step === 1 ? 'bg-blue-600' : 'bg-gray-400'}`}></span>
        <span className={`h-2 w-2 rounded-full ${step === 2 ? 'bg-blue-600' : 'bg-gray-400'}`}></span>
        <span className={`h-2 w-2 rounded-full ${step === 3 ? 'bg-blue-600' : 'bg-gray-400'}`}></span>
      </div>
    </div>
  );
};

export default Onboarding;
