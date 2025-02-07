import NotionAvatar from '../../src/notion-avatar.png'
import NewWord from './NewWord'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <>
    
        <div>
            <div className='mx-auto'>
                <div className='border-b-2 flex justify-between items-center p-4'>
                    {/* logo */}
                    <div>
                        <p>AfriDict</p>
                    </div>

                    {/* Right Flex */}
                    <div className='flex justify-around items-center gap-4'>
                        {/* Button */}
                        <div>
                            <button onClick={() => navigate('/new-word')}
                            className='border-black pl-3 pr-3 pt-1 pb-1 rounded-lg bg-black text-white'>
                                Add Word
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