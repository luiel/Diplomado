import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, doc, deleteDoc} from 'firebase/firestore';


const Formulario = () => {
    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [listaFrutas, setListaFrutas] = useState([])
    const [proveedor, setProveedor] = useState('');
    const [cliente, setCliente] = useState('');


    useEffect(() => {

        const obtenerDatos = async () => {
        try {

            await onSnapshot(collection(db, "frutas"), (querySnapshot) => {
            setListaFrutas(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            })

        } catch (error){
            console.log(error);
        }
        };

        obtenerDatos();
    },[]);

    const eliminar = async id => {
        console.log(id)
        try{
            await deleteDoc(doc(db,'frutas',id))
        }catch(error){
            console.log(error)
        }
    }
    const guardarFrutas = async (e) =>{
        e.preventDefault()
        try{
       
           
            const data = await addDoc(collection(db,'frutas'),{
                nombreFruta: fruta,
                nombreDescripcion: descripcion,
                nombreProveedor: proveedor,
                nombreCliente: cliente,

            })

            setListaFrutas([
                ...listaFrutas,
                {nombreFruta:fruta, nombreDescripcion:descripcion, nombreProveedor:proveedor, nombreCliente:cliente, id:data.id}
            ])

            setFruta('')
            setDescripcion('')
            setProveedor('')
            setCliente('')
            e.target.reset()
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>CRUD BÁSICO</h1>
        <hr/>
        <div className='row'>
            <div className="col-8">
                <h4 className="text-center">Listado de Frutas</h4>
                <ul className="list-group">
                    {
                        listaFrutas.map(item =>(
                            <li className='list-group-item' key={item.id}>
                                <span className='lead'>{item.nombreFruta}-{item.nombreDescripcion}-{item.nombreProveedor}-{item.nombreCliente}</span>
                                <button className='btn btn-danger btn-sm float-end mx-2' onClick={()=>eliminar(item.id)}>Eliminar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        
        <div className='col-4'>
            <h4 className="text-center">
                Agregar Frutas
            </h4>
            <form onSubmit={guardarFrutas}>
                <input 
                className='form-control mb-2'
                type="text" 
                placeholder='Ingrese Fruta'
                onChange={(e)=>setFruta(e.target.value)}
                value = {fruta}
                ></input>
                <input 
                className='form-control mb-2'
                type="text" 
                placeholder='Ingrese Descripción'
                onChange={(e) => setDescripcion(e.target.value)}
                value = {descripcion}>
                </input>
                <input 
                className='form-control mb-2'
                type="text" 
                placeholder='Ingrese Proveedor'
                onChange={(e)=>setProveedor(e.target.value)}
                value = {proveedor}
                ></input>
                <input 
                className='form-control mb-2'
                type="text" 
                placeholder='Ingrese Cliente'
                onChange={(e) => setCliente(e.target.value)}
                value = {cliente}>
                </input>
                <button 
                className='btn btn-primary btn-block'
                type='submit'
                >Agregar</button>
            </form>
        </div>
        </div>   
    </div>
  )
}

export default Formulario