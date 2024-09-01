import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useState } from "react";

const likeHandler = () => {

}

const dislikeHandler = () => {

}

const WordCard = (props) => {
  return (
    <>


    {/* Container */}
    <div className="border border-solid p-4 my-4 rounded-xl bg-green-300">
        <div className="text-green-600 font-bold text-2xl">
            {props.word}
        </div>

        <div className="mt-2"> {/* Array */}
            {props.meanings}
        </div> 

        <div className="mt-2">
            {props.examples}
        </div>

        <div className="mt-2">
            origin: {props.origin}
        </div>

        <div className="mt-2 font-bold">
            by {props.byUser}
        </div>

        <div className="mt-2 font-bold">
            {props.dateAdded}
        </div>

        {/* Likes and dislikes container */}
        <div className="flex justify-around border-2 border-solid w-2/4 rounded-full mt-2">
            {/* Likes */}
            <div className="flex">
                {/* Like count */}
                <button onClick={likeHandler}>
                    <AiOutlineLike
                    className="text-2xl"
                    />
                </button>
                
                <div>0</div>
            </div>

            {/* Dislikes */}
            <div className="flex">
                {/* Dislike count */}
                <button onClick={dislikeHandler}>
                    <AiOutlineDislike
                    className="text-2xl"
                    />
                </button>
                
                <div>0</div>
            </div>

        </div>


    </div>

    </>
  )
}

export default WordCard