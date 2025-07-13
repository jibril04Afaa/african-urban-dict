import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const WordCard = (props) => {
    const [votes, setVotes] = useState({
        likes: props.likes || 0,
        dislikes: props.dislikes || 0,
        userVote: null // 'like', 'dislike', or null
    });
    const [isVoting, setIsVoting] = useState(false);

    // Update votes if props change
    useEffect(() => {
        setVotes({
            likes: props.likes || 0,
            dislikes: props.dislikes || 0,
            userVote: null
        });
    }, [props.likes, props.dislikes, props.id]);

    const handleVote = async (voteType) => {
        if (isVoting) return;

        // Calculate new vote state
        const newVote = votes.userVote === voteType ? null : voteType;
        const likeDelta = (newVote === 'like' ? 1 : 0) - (votes.userVote === 'like' ? 1 : 0);
        const dislikeDelta = (newVote === 'dislike' ? 1 : 0) - (votes.userVote === 'dislike' ? 1 : 0);

        // Optimistic update
        setVotes(prev => ({
            likes: prev.likes + likeDelta,
            dislikes: prev.dislikes + dislikeDelta,
            userVote: newVote
        }));

        setIsVoting(true);
        try {
            // TODO: Replace with your actual API call
            // await api.voteWord(props.id, newVote);
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            // Revert on error
            setVotes(prev => ({
                likes: prev.likes - likeDelta,
                dislikes: prev.dislikes - dislikeDelta,
                userVote: votes.userVote
            }));
            toast.error('Failed to update vote. Please try again.');
        } finally {
            setIsVoting(false);
        }
    };

    return (
        <div className="flex justify-center items-center pt-8">
            <div className="w-4/5">
                <div className="border-2 flex flex-col justify-around bg-white pl-4 pr-4 pt-3 pb-3 rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-bold text-xl">{props.wordTitle}</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="cursor-pointer">
                                <BsPencilSquare />
                            </div>
                            <div className="cursor-pointer">
                                <FaRegTrashCan />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <div>
                            <p>{'[' + props.origin + ']'}</p>
                        </div>
                        <div>
                            <p className="font-bold">.</p>
                        </div>
                        <div>
                            <p>Added by {'@' + props.username}</p>
                        </div>
                        <div>
                            <p className="font-bold">.</p>
                        </div>
                        <div>
                            <p>{props.dateAdded}</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div>
                            <p>{props.wordDef}</p>
                        </div>
                    </div>
                   
                    <div className="flex gap-4 pt-4">
                        <div 
                            className="border-0 pl-3 pr-3 pt-1 pb-1 rounded-lg flex justify-center items-center bg-gray-100 cursor-pointer"
                            onClick={() => handleVote('like')}
                            style={{ 
                                opacity: isVoting ? 0.5 : 1,
                                pointerEvents: isVoting ? 'none' : 'auto'
                            }}
                        >
                            <div>
                                <FaArrowUp />
                            </div>
                            <div>
                                <p>{votes.likes}</p>
                            </div>
                        </div>

                        <div 
                            className="border-0 pl-3 pr-3 pt-1 pb-1 rounded-lg flex justify-center items-center bg-gray-100 cursor-pointer"
                            onClick={() => handleVote('dislike')}
                            style={{ 
                                opacity: isVoting ? 0.5 : 1,
                                pointerEvents: isVoting ? 'none' : 'auto'
                            }}
                        >
                            <div>
                                <FaArrowDown />
                            </div>
                            <div>
                                <p>{votes.dislikes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordCard;