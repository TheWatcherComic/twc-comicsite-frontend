import React from 'react'
import { ReactComponent as LogoNegative } from "../logo-negative.svg";


const Footer = () => {
  return (
    <footer class="footer bg-white dark:bg-zinc-800 relative pt-1 ">
        <div class="container mx-auto px-6">
    
            <div class="sm:flex sm:mt-8">
                <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div class="flex flex-col">
                        <LogoNegative className='w-24 h-10' />
                    </div>
                    <div class="flex flex-col">
                        <p>Albeniz Vargas</p>
                        <p>Johan Infante</p>
                        <p>Gabriel Rodriguez</p>
                    </div>
                    <div class="flex flex-col">
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm text-blue-700 dark:text-white  font-bold mb-2">
                        © 2022 by ARVA
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer