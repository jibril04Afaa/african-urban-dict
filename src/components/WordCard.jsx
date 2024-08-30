
const WordCard = (props) => {
  return (
    <>

    {/* Container */}
    <div className="border border-solid flex flex-col justify-center px-4">
        <div className="text-green-600 font-bold">
            {props.word}
        </div>

        <div> {/* Array */}
            {props.meanings}
        </div> 

        <div>
            {props.examples}
        </div>

        <div>
            {props.byUser}
        </div>

        <div>
            {props.dateAdded}
        </div>
    </div>

    </>
  )
}

export default WordCard