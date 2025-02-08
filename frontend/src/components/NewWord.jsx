import React from 'react'
import { useNavigate } from 'react-router-dom'
const NewWord = () => {
  const navigate = useNavigate()
  return (

    <>
      <div>
        <div>
          <div>
            {/* New Word Container */}
            <div className='pt-8'>
              <div className='border-2 pl-4 pr-4 pt-3 pb-3 rounded-lg'>
                {/* Word Title */}
                <div className='flex items-center gap-2'>
                  <p>Word</p>
                  <div className='border-2 rounded-lg w-80'>
                    <input type="text" placeholder='Enter word' className='w-full pl-2 pr-2 pt-1 pb-1' />
                  </div>
                </div>
                {/* Origin */}
                <div className='flex items-center gap-2 mt-4'>
                  <p>Origin</p>
                  <div className='border-2 rounded-lg w-80'>
                    <input type="text" placeholder='Enter origin' className='w-full pl-2 pr-2 pt-1 pb-1' />
                  </div>
                </div>

                {/* Added by */}
                <div className='flex items-center gap-2 mt-4'>
                  <p>Added by</p>
                  <div className='border-2 rounded-lg w-80'>
                    <input type="text" placeholder='Enter username' className='w-full pl-2 pr-2 pt-1 pb-1' />
                  </div>
                </div>

                {/* Word Definition */}
                <div className='flex items-center gap-2 mt-4'>
                  <p>Definition</p>
                  <div className='border-2 rounded-lg w-80'>
                    <input type="text" placeholder='Enter definition' className='w-full pl-2 pr-2 pt-1 pb-1' />
                  </div>
                </div>

                <div className='pt-4'>
                  <button onClick={() => {navigate('/')}}
                  className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Save Word</button>
                </div>

              </div>


            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default NewWord