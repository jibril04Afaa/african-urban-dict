import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <>
        <div>
            <div>
                <div className='pt-8'>
                    <div className=''>
                        <div className='flex justify-center items-center'>
                            <input type="text" 
                            placeholder='Search African slang...'
                            className='pl-3 pr-3 pt-2 pb-2 rounded-lg w-10/12 font-normal '
                            />
                            {/* Search Icon */}
                            <div className='text-xl'>
                                <CiSearch/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar