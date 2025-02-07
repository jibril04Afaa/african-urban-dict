import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const WordCard = (props) => {
  return (
    <>
        <div className="flex justify-center items-center pt-8">
            <div className="w-4/5">
                <div className="border-2 flex flex-col justify-around bg-white pl-4 pr-4 pt-3 pb-3 rounded-lg">
                    <div className="flex justify-between">
                        {/* Word Title */}
                        <div>
                            <p className="font-bold">{props.wordTitle}</p>
                        </div>

                        {/* Buttons */}
                        <div>
                            {/* Edit */}
                            <div></div>
                            {/* Delete */}
                            <div></div>
                        </div>
                    </div>

                    <div className="flex justify-between w-6/12">
                        {/* Origin */}
                        <div>
                            <p>{'[' + props.origin + ']'}</p>
                        </div>

                        {/* Separator */}
                        <div>
                            <p>.</p>
                        </div>

                        {/* Added by */}
                        <div>
                            <p>Added by {'@' + props.username}</p>
                        </div>

                        {/* Separator */}
                        <div>
                            <p>.</p>
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
                   <div className="flex gap-4">
                    {/* Like */}
                    <div className="border-0 pl-3 pr-3 pt-1 pb-1 rounded-lg flex justify-center items-center bg-gray-100">
                        {/* Like button */}
                        <div>
                            <FaArrowUp/>
                        </div>
                        {/* Like Count */}
                        <div>
                            <p>234</p>
                        </div>
                    </div>

                    {/* Dislike */}
                    <div className="border-0 pl-3 pr-3 pt-1 pb-1 rounded-lg flex justify-center items-center bg-gray-100">
                        {/* Dislike button */}
                        <div>
                            <FaArrowDown/>
                        </div>
                        {/* Dislike Count */}
                        <div>
                            <p>12</p>
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