import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
function AgregarUsuario(){

          //Hooks 
          const[nombre, setNombre]=useState('')
          const[email, setemail]=useState('')
          const[movil, setmovil]=useState('')

    function agregarUsuario(){
            var usuario = {
                nombre: nombre,
                email: email,
                movil: movil,
                idusuario: uniquid()
            }
        console.log(usuario)    

        axios.post('/api/usuario/agregarusuario', usuario)
        .then (res => {
            alert(res .data)
        })
        .then(err => {console.log(err)}) 
    }

    return(  
      
        <div className='container'>
            <div className='row'>         
                    <h2 className='mt-4'>Agregar un nuevo usuarios</h2>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label' >Nombre</label>
                        <input type='text' className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label' >Email</label>
                        <input type='email' className='form-control' value={email} onChange={(e) => {setemail(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='movil' className='form-label' >Movil</label>
                        <input type='text' className='form-control' value={movil} onChange={(e) => {setmovil(e.target.value)}}></input>
                    </div>
                    <button onClick={agregarUsuario} className='btn btn-primary'>Guardar Usuario</button>
              
                </div>
            </div>    
            
        </div>
    
    )
}

export default AgregarUsuario