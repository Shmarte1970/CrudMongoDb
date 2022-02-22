import React from 'react'
function UsuarioIndividual({usuario}){
    return(
        <div className='container'>
          <div className='row'>
              <ul className='list-group'>
                <li className='list-group-item'>{usuario.idusuario}
                </li>
              </ul>
          </div>
        </div>
    )
}

export default UsuarioIndividual