import "../Form/Form.css"
import { useState } from "react"


const Form  = ()=>{

    return(

        <section className="flex justify-center mt-5">
            <form className="flex flex-col gap-5 items-center text-left max-w-[600px]">
                <div className="flex flex-col w-full">
            <h4>Agrega fotos de la mascota en adopción</h4>
            
                <input type="file" className=""/>
                <input type="file" className=""/>
                <input type="file" className=""/>
            </div>
            <div className="flex flex-col w-full">
                Completa los siguientes datos sobre la mascota en adopción
                <input type="text" placeholder="Nombre" className="p-3 border-slate-800 border-[1px] rounded-md mt-2"/>
                <input type="text" placeholder="Sexo" className="p-3 border-slate-800 border-[1px] rounded-md mt-2"/>
                <input type="text" placeholder="Edad (aproximada)" className="p-3 border-slate-800 border-[1px] rounded-md mt-2"/>
                <div className="flex gap-6 mt-4">
                <input type="checkbox" name="raza" />
                <label htmlFor="raza" className="text-gray-500">{"No pertenece a una raza específica (opcional)"}</label>
                </div> 
            </div>
            <div className="flex flex-col w-full">
                <h4>Comparte la historia de la mascota, ¿cómo llegó a vos?</h4>
                <textarea placeholder="Contanos..."className="border-slate-800 border-[1px] rounded-md mt-2"></textarea>
            </div>
            <div className="flex flex-col w-full">
                <h4>Salud de la mascota</h4>
                <h5>Vacunas aplicadas</h5>
                <textarea name="vacuna" placeholder="Contanos..." className="border-slate-800 border-[1px] rounded-md mt-2 w-full"></textarea>
                <label htmlFor="vacuna" className="text-gray-500">Opcional</label>
            </div>
            <input type="submit" className="bg-sky-800 w-full rounded-md p-1 text-text-white"/>
            </form>
        </section>
    )

}

export default Form;