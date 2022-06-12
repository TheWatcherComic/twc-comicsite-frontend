import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const SearchBar = () => {
  return (
    <div class="flex justify-center">
        <div class="w-48 sm:w-72 md:w-72 lg:w-96">
            <div class="input-group relative flex flex-row items-stretch w-full mb-4">
            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
            <button class="px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight rounded-r-xl uppercase shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar



