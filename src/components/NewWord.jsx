
const NewWord = () => {
  return (
    <>
        <h1 className="text-center">New Word</h1>
        {/* Major container */}
        <div className="">
            {/* Container */}
            <div className="border border-solid p-4 my-4 rounded-xl bg-green-300">

                {/* Word */}
                <div className=" p-2">
                    <input type="text" name="" id="" 
                    placeholder="Word" 
                    className="w-full"/>
                </div>

                {/* Definition */}
                <div className="p-2">
                    <input type="text" 
                    name="" id="" 
                    placeholder="Type your definition here..."
                    className="w-full" />
                </div>

                {/* Example */}
                <div className="p-2">
                    <input type="text" 
                    name="" id="" 
                    placeholder="Example sentence..." 
                    className="w-full"/>
                </div>

                {/* Tags */}
                <div className="p-2">
                    <input type="text" 
                    placeholder="Type a list of comma-separated tags..."
                    className="w-full" />
                </div>

                {/* Language */}
                <div className="p-2">
                    <select name="" id="">
                        <option value="english">English</option>
                        <option value="hausa">Hausa</option>
                        <option value="french">French</option>
                        <option value="arabic">Arabic</option>
                        <option value="wolof">Wolof</option>
                        <option value="zulu">Zulu</option>
                        <option value="swahili">Swahili</option>
                        <option value="igbo">Igbo</option>
                        <option value="xhosa">Xhosa</option>
                    </select>
                </div>

                <div className="mt-2 flex justify-center">
                    <button 
                    className="border-4 rounded-xl p-2 w-full font-bold">
                        Submit
                    </button>
                </div>
            </div>


        </div>


    </>
    
  )
}

export default NewWord