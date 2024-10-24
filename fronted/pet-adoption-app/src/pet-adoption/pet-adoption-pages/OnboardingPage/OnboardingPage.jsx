import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./OnboardingPage.css";

const OnboardingPage = () => {
  const sliderRef = useRef(null); // Usamos useRef para obtener acceso al Slider

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Función para ir a la siguiente diapositiva
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-full max-w-[412px] h-[892px] mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {/* Primera vista */}
        <div className="bg-white h-auto">
          <div className='flex flex-col mt-8 items-center'>
            <h2>Nombre de la aplicacion</h2>
            <img src="/OnboardingPage/imagen1.png" alt="Imagen 1" className="w-1/2 mb-4 mt-10" />
            <h2 className="text-xl font-bold mb-2 mt-10">¡Tu compañero te está esperando!</h2>
            <p className=" text-gray-600 mb-6 mt-3">
              <span className='font-semibold'>Encuentra a tu compañero ideal</span> y dale un hogar <br />
              lleno de amor. Nuestra app <span className='font-semibold'> conecta a personas como</span> <br />
              <span className='font-semibold'>tú con refugios</span> que cuidan a mascotas que necesitan <br />
              ser adoptados
            </p>
          </div>
          <div className='p-5'>
            <button onClick={nextSlide} className=" w-[380px] h-[50px] bg-[#0C5A87] text-white py-2 px-6 rounded-lg">Siguiente</button>
          </div>
          <div className='text-center text-[#CB7A01] text-[16px] font-medium'>
            <button className="mt-4 underline">Saltar</button>
          </div>
        </div>


        {/* Segunda vista */}
        <div className="bg-white h-auto">
          <div className='flex flex-col mt-8 items-center'>
          <h2>Nombre de la aplicacion</h2>
          <img src="/OnboardingPage/Imagen2.png" alt="Imagen 2 mt-10" className="w-1/2 mb-4" />
          <h2 className="text-xl text-[24px] font-bold mb-2 mt-10">Ayuda mascotas</h2>
          <p className="text-gray-600 text-[16px] mb-6 mt-3">Publica a las mascotas que necesitan un nuevo hogar <br />
          y ayuda a encontrarles una familia
          </p>
          </div>
          <div className='p-5'>
            <button onClick={nextSlide} className=" w-[380px] h-[50px] bg-[#0C5A87] text-white py-2 px-6 rounded-lg">Siguiente</button>
          </div>
          <div className='text-center text-[#CB7A01] text-[16px] font-medium'>
            <button className="mt-4 underline">Saltar</button>
          </div>
        </div>

        {/* Tercera vista */}
        <div className="bg-white h-screen">
          <div className='flex flex-col mt-8 items-center '>
          <h2>Nombre de la aplicacion</h2>
          <img src="/OnboardingPage/imagen3.png" alt="Imagen 3" className="w-1/2 mb-4" />
          <h2 className="text-xl font-bold mb-2 mt-10">¡Siempre cerca!</h2>
          <p className="text-center text-gray-600 mb-6">Accede a consejos y contacta con veterinarios para el cuidado de las mascotas...</p>           
          </div>
          <div className='p-5'>
            <button onClick={nextSlide} className=" w-[380px] h-[50px] bg-[#0C5A87] text-white py-2 px-6 rounded-lg">Siguiente</button>
          </div>
          <div className='text-center text-[#CB7A01] text-[16px] font-medium'>
            <button className="mt-4 underline">Saltar</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OnboardingPage;
