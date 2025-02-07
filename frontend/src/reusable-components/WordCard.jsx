import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";




const WordCard = (props) => {
    const [ likeCounter, setLikeCounter ] = useState(0)
    const [ dislikeCounter, setDislikeCounter ] = useState(0)

    const addLike = () => {
        setLikeCounter(likeCounter + 1)
    }

    const addDislike = () => {
        setDislikeCounter(dislikeCounter + 1)
    }
  return (
    <>
    
        <div className="flex justify-center items-center pt-8">
            <div className="w-4/5">
                <div className="border-2 flex flex-col justify-around bg-white pl-4 pr-4 pt-3 pb-3 rounded-lg">
                    <div className="flex justify-between">
                        {/* Word Title */}
                        <div>
                            <p className="font-bold text-xl">{props.wordTitle}</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            {/* Edit */}
                            <div className="cursor-pointer">
                                <BsPencilSquare/>
                            </div>
                            {/* Delete */}
                            <div className="cursor-pointer">
                                <FaRegTrashCan/>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1 ">
                        {/* Origin */}
                        <div>
                            <p>{'[' + props.origin + ']'}</p>
                        </div>

                        {/* Separator */}
                        <div>
                            <p className="font-bold">.</p>
                        </div>

                        {/* Added by */}
                        <div>
                            <p>Added by {'@' + props.username}</p>
                        </div>

                        {/* Separator */}
                        <div>
                            <p className="font-bold">.</p>
                        </div>

                        {/* Date added */}
                        <div>
                            <p>{props.dateAdded}</p>
                        </div>
                    </div>

                    {/* Word definition */}
                    <div className="pt-4">
                        <div>
                            <p>{props.wordDef}</p>
                        </div>
                    </div>
                   
                   {/* Like & dislike buttons */}
                   <div className="flex gap-4 pt-4">
                    {/* Like */}
                    <div className="border-0 pl-3 pr-3 pt-1 pb-1 rounded-lg flex justify-center items-center bg-gray-100 cursor-pointer">
                        {/* Like button */}
                        <div>
                            <FaArrowUp
                            onClick={addLike}
                            />
                        </div>
                        {/* Like Count */}
                        <div>
                            <p>{likeCounter}</p>
                        </div>
                    </div>

                    {/* Dislike */}
                    <div className="border-0 pl-3 pr-3 pt-1 pb-1 rounded-lg flex justify-center items-center bg-gray-100 cursor-pointer">
                        {/* Dislike button */}
                        <div>
                            <FaArrowDown
                            onClick={addDislike}
                            />
                        </div>
                        {/* Dislike Count */}
                        <div>
                            <p>{dislikeCounter}</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WordCard