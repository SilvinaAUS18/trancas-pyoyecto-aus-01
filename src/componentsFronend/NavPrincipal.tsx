"use client"
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

 import React from 'react'
 
 function NavBarPrincipal() {
    const [navBar, setNavBar] = useState(false);
    
   return (
     <div  >
        <nav className=" w-auto container bg-gray-400 relative  z-10  justify-center ">
            <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center lg:justify-center md:justify-end py-3 md:py-5 md:blok">
                    {/**boton  */}
                    <div className="md:hidden ">
                        <button 
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 "
                        onClick={()=> setNavBar(!navBar)}
                        >
                        { navBar ? (
                          //  <Image src={cruz} width={30} height={} alt="logo" />   
                          <IoCloseSharp className="bg-white w-8 h-8 text-gray-500 focus:border-blue-300"/>                 
                        ) : (
                           // <Image src={hambur} width={30} height={30} alt="logo" className= "focus:border-none active:border-none"       />
                           <MdMenu className="bg-white  w-8 h-8  text-gray-500 focus:border-blue-300" />
                        )}    
                        </button>

                    </div>
                </div>
            <div>
            <div
              className={`flex-1 justify-self-center w-full pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
                navBar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-1/3 md:h-auto  items-center justify-center md:flex ">
                <li className="pb-4 text-lg text-white py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavBar(!navBar)}>
                    INICIO
                  </Link>
                </li>
                <li className="pb-4 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/institucional" onClick={() => setNavBar(!navBar)}>
                    INSTITUCIONAL
                  </Link>
                </li>
                <li className="pb-4 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/nuestrahistoria" onClick={() => setNavBar(!navBar)}>
                    NUESTRA HISTORIA
                  </Link>
                </li>
                <li className="pb-4 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/poloeducativo" onClick={() => setNavBar(!navBar)}>
                    POLO EDUCATICO
                  </Link>
                </li>
                <li className="pb-4 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/turismo" onClick={() => setNavBar(!navBar)}>
                    TURISMO
                  </Link>
                </li>
                <li className="pb-4 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/calendario" onClick={() => setNavBar(!navBar)}>
                    CALENDARIO
                  </Link>
                </li>
                <li className="pb-4 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-800 lg:hover:underline md:hover:text-blue-500 md:hover:bg-transparent">
                  <Link href="/produccion" onClick={() => setNavBar(!navBar)}>
                    PRODUCCION
                  </Link>
                </li>



              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>


   )
 }
 
 export default NavBarPrincipal