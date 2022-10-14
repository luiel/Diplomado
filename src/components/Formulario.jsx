import React, { useState } from 'react';

const Formulario =() => {
    const[fruta, setFruta]= useState('');
    const[descripcion, setDescription] = useState('');

    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Crud Basico</h1>
            <hr />
            <div className='row'>
                <div className="col-8">             
                    <h4 className="text-center">Listado Frutas</h4>
                    <ul className="list-group">
                    </ul>
                </div>

                <div className='col-4'>
                <h4 className="text-center">
                    Agregar Frutas
                </h4>
                
            <form>
                <input 
                className='form-control mb-2'
                type="text" placeholder='Ingrese Fruta'></input>
                <input 
                 className='form-control mb-2'
                type="text" placeholder='Ingrese Descripcion'></input>
                <boton className='btn btn-primary btn-block'>Agregar</boton>
            </form>

            </div>
            </div>
            </div>
    )

}
export default Formulario