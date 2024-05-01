// eslint-disable-next-line no-unused-vars
import React from 'react';
/**import { BeakerIcon } from '@heroicons/react/24/solid';**/

function Header() {
    let Links =[
        {name: 'Menu', link:'/'},
        {name: 'Servicios', link:'/'},
        {name: 'Material', link:'/'},
        {name: 'Usuarios', link:'/'},
    ]
    return (
        <div className='bg-white'>
          <div className='md:px-10 py-5 px-7 md:flex justify-between items-center'>
            <div className='flex text-2xl cursor-pointer items-center gap-2'>
            <img src='./src/imagenes/logoTechBorrow.png' width={70} height={70}></img>
                <span className='font-bold'>TechBorrow</span>
            </div>

            {/*Links */}
            <ul className='md:flex pl-9 md:pl-0'>
                
                {Links.map(link =>(
                   // eslint-disable-next-line react/jsx-key
                   <li className='font-semibold text-2xl my-7 md:my-0 md:ml-8'>
                    <a href='/'>{link.name}</a>
                   </li>))
                }
                <button className='btn font-semibold text-2xl my-7 md:my-0 md:ml-8 rounded md:static'>Salir</button>
            </ul>
          </div>
          <div className='bg-yellow-400 md:px-10 py-1 px-7 md:flex justify-between items-center'></div>
        </div>
    );
}

export default Header;