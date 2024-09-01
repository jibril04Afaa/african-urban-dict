
const NewWord = () => {
  return (
    <>
        <h1>New Word</h1>
        {/* Major container */}
        <div>
            {/* Container */}
            <div>
                {/* Word */}
                <div>
                    <input type="text" name="" id="" placeholder="Word"/>
                </div>

                {/* Definition */}
                <div>
                    <input type="text" name="" id="" placeholder="Type your definition here..." />
                </div>

                {/* Example */}
                <div>
                    <input type="text" name="" id="" placeholder="Type an example of how it's used in a sentence..." />
                </div>

                {/* Tags */}
                <div>
                    <input type="text" placeholder="Type a list of comma-separated tags..." />
                </div>

                {/* Language */}
                <div>
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
            </div>
        </div>


    </>
    
  )
}

export default NewWord