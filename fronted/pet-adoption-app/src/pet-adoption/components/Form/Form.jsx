import "../Form/Form.css";
import { useState } from "react";
import CloseModal from "../../../assets/close-modal-icon.svg";
import AdoptMe from "../../../assets/img-adopt-me.svg";
import Check from "../../../assets/check.svg";

const Form = () => {

  const [firstImg, setFirstImg] = useState();
  const [secondImg, setSecondImg] = useState();
  const [thirdImg, setThirdImg] =  useState();
  const [closeModal, setCloseModal] = useState(true);
  const [closeSecModal, setSecCloseModal] = useState(true);

    const handleImageChange = (e, setFormImage) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormImage(imageUrl);
      }
      console.log("la imagen ha sido actualizada")
    };

    const handlerModal = (e)=>{
      e.preventDefault();
      setCloseModal(!closeModal)
      window.scrollTo({ top: 0 });
    }

    const handlerSecModal = (e)=>{
      e.preventDefault();
      setSecCloseModal(!closeSecModal);
    }
    const handlerContinue = (e) =>{
        e.preventDefault();
        setCloseModal(true)
        setSecCloseModal(false)
    }

  return (
    <section className="flex items-center flex-col bg-main-background">
      <div className={`${closeModal ? "hidden": "block lg:flex lg:justify-center"} absolute w-full h-[150vh] bg-[#0369a1] bg-opacity-50 top-0 z-10 `}>
        <div className="box-border absolute my-auto mx-10 top-[20%] bg-[#0369a1] opacity-100 rounded-md p-10 flex flex-col">
          <div className="flex justify-between">
          <h4 className="text-[30px] text-text-white font-bold">¿Todo listo?</h4>
          <img src={CloseModal} alt="close-icon"  onClick={handlerModal} className="cursor-pointer"/> 
          </div>
        
        <h5 className=" text-[25px] text-text-white font-bold mt-5">Solo revisa los detalles</h5>
        <p className="text-[25px] text-text-white">Antes de continuar asegúrate que esté todo correcto. <br />
        La info clara ayudará a que tu peludo encuentre su nuevo hogar más rápido.
        ¡Gracias por hacerlo posible!
        </p>
        <button className="p-4 bg-secondary-orange rounded-lg text-text-white font-bold text-[22px] mt-6 self-end" onClick={handlerContinue}>Continuar</button>
        </div>
      </div>

      <div className={`${closeSecModal ? "hidden" : ""} w-full  bg-[#0369a1] h-[250vh]  absolute top-0 left-0 flex flex-col lg:h-[160vh]`}>
      <img src={CloseModal} alt="close" className="w-10 self-end m-8 cursor-pointer" onClick={handlerSecModal} />
        <div className="flex box-border flex-col max-w-[500px] mx-auto items-center p-10">
        
          <img src={Check} alt="check" className="w-[90px]"/>
          <img src={AdoptMe} alt="adopt-me" />
          <h4 className="text-text-white font-bold text-[30px]">
          ¡Tu mascota ya está en busca de su nuevo hogar!
          </h4>
          <h5 className="text-text-white text-[20px]">
          La información se ha publicado con éxito. ¡Gracias por confiar en AdoptaFelipx para ayudar 
          a tu compañero a encontrar una nueva familia! Pronto recibirás notificaciones de posibles 
          adoptantes interesados.
          </h5>
       <button className="p-2 text-text-white text-[20px] bg-secondary-orange w-full rounded-lg mt-5" onClick={handlerSecModal}>Entendido</button>
        </div>
       
      </div>
      <form className="flex flex-col gap-5 items-center text-left max-w-[600px] m-5">
        <div className="flex flex-col w-full  ">
          <h4 className="text-[#605e5e] font-bold text-[20px]">
            Agregá imágenes de la mascota en adopción
          </h4>
          <div className="flex w-full flex-wrap max-sm:justify-center">
            <label
              htmlFor="image-upload-first"
              className="bg-[#ffe18e] mt-4  w-[350px] h-[350px] flex items-center justify-center 
              text-8xl text-[#605e5e] font-mono cursor-pointer max-sm:w-[350px] max-sm:h-[300px] 
              bg-center bg-cover rounded-3xl"
              accept="image/*"
              style={{
                backgroundImage: firstImg ? `url(${firstImg})` : "none"
                 
              }}
            >
              {`${firstImg ? "" : "+"}`}
              <input type="file" id="image-upload-first" className="hidden" onChange={(e)=> handleImageChange(e, setFirstImg)}/>
            </label>

            <div className="flex flex-col max-sm:items-center">
              <label
                htmlFor="image-upload-second"
                className="bg-[#ffe18e] mt-4 ml-4 w-[165px] h-[165px] flex items-center justify-center
                 text-8xl text-[#605e5e] font-mono cursor-pointer max-sm:w-[350px] max-sm:h-[300px] 
                 max-sm:ml-0 bg-cover bg-center rounded-3xl"
                accept="image/*"
                style={{
                  backgroundImage: secondImg ? `url(${secondImg})` : "none"
                 

                }}
              >
                {`${secondImg ? "": "+"}`}
                <input
                  type="file"
                  id="image-upload-second"
                  className="hidden"
                  onChange={(e)=> handleImageChange(e, setSecondImg)}
                />
              </label>

              <label
                htmlFor="image-upload-third"
                className="bg-[#ffe18e] ml-4 mt-[20px] w-[165px] h-[165px] flex items-center 
                justify-center text-8xl text-[#605e5e] font-mono cursor-pointer max-sm:w-[350px]
                max-sm:h-[300px] max-sm:ml-0 bg-center bg-cover rounded-3xl"
                accept="image/*"
                style={{
                  backgroundImage: thirdImg ? `url(${thirdImg})` : "none"
                   
                }}
              >
                {`${thirdImg ? "": "+"}`}
                <input type="file" id="image-upload-third" className="hidden"
                onChange={(e)=> handleImageChange(e, setThirdImg)}/>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="text-[#605e5e] font-bold text-[20px]">
            Completa los siguientes datos sobre la mascota en adopción
          </h4>
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 border-slate-800 border-[1px] rounded-md mt-2 border-[#605e5e]"
          />
          <input
            type="text"
            placeholder="Sexo"
            className="p-3 border-slate-800 border-[1px] rounded-md mt-2 border-[#605e5e]"
          />
          <input
            type="text"
            placeholder="Edad (aproximada)"
            className="p-3 border-slate-800 border-[1px] rounded-md mt-2 border-[#605e5e]"
          />
          <div className="flex gap-6 mt-4">
            <input type="checkbox" name="raza" />
            <label htmlFor="raza" className="text-[#605e5e]">
              {"No pertenece a una raza específica (opcional)"}
            </label>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="text-[#605e5e] font-bold text-[20px]">
            Comparte la historia de la mascota, ¿cómo llegó a vos?
          </h4>
          <textarea
            placeholder="Contanos..."
            className="p-3 border-slate-800 border-[1px] rounded-md mt-2 border-[#605e5e]"
          ></textarea>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="text-[#605e5e] font-bold text-[20px]">
            Salud de la mascota
          </h4>
          <h5 className="text-[#605e5e] font-bold text-[20px]">
            {" "}
            <span className="text-black text-[35px] text-[#605e5e] align-middle">
              {" "}
              ·{" "}
            </span>{" "}
            Vacunas aplicadas
          </h5>
          <textarea
            name="vacuna"
            placeholder="Contanos..."
            className="p-3 border-slate-800 border-[1px] rounded-md mt-2 w-full border-[#605e5e]"
          ></textarea>
          <label htmlFor="vacuna" className="text-[#605e5e]">
            Opcional
          </label>
        </div>
        <input
          type="submit"
          className="bg-sky-800 w-full rounded-md p-2 text-text-white font-bold text-[20px]"
          value="Confirmar"
          onClick={handlerModal}
        />

        <a href="/" className="text-[#CB7A01] text-[25px] font-bold underline">
          Regresar
        </a>
      </form>
    </section>
  );
};

export default Form;
