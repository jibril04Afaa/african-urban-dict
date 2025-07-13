import NotionAvatar from '../../src/notion-avatar.png'
import NewWord from './NewWord'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <>
    
        <div>
            <div className='mx-auto'>
                <div className='flex justify-between items-center p-4'>
                    {/* logo */}
                    <div>
                        <p>AfriDict</p>
                    </div>

                    {/* Right Flex */}
                    <div className='flex justify-around items-center gap-4'>
                        {/* Button */}
                        <div>
                            <button 
                                onClick={() => navigate('/new-word')}
                                className={`
                                    px-4 py-2 rounded-lg font-medium
                                    bg-gradient-to-r from-amber-600 to-amber-800
                                    text-white shadow-lg
                                    border-2 border-amber-900
                                    hover:from-amber-700 hover:to-amber-900
                                    transform hover:scale-105 transition-transform
                                    focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50
                                    relative overflow-hidden group
                                `}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                    </svg>
                                    Add Word
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                            </button>
                        </div>

                        {/* Notion image */}
                        <div>
                            <img src={NotionAvatar} 
                            alt="Notion Avatar"
                            className='w-14'
                             />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar