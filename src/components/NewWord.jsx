import { useEffect, useState } from "react"



const NewWord = () => {
    // "http://localhost:5050/words" 
    // stateful variables for each field in Word DbContext model
    const [ term, setTerm ] = useState("")
    const [ definition, setDefinition ] = useState("")
    const [ example, setExample ] = useState("")
    const [ tags, setTags ] = useState("")
    const [ language, setLanguage ] = useState("")

    // sends POST request to "/words" endpoint
    const submitHandler = async() => {
        try {
            const response = await fetch("http://localhost:5050/words", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    term,
                    definition, 
                    example,
                    tags, 
                    language
                })
            })

            if (!response.ok) {
                throw new Error("Failed to create new word.")
            }

            // data from POST request
            const data = await response.json()
            console.log(data)

            // reset fields after successful submission
            setTerm("")
            setDefinition("")
            setExample("")
            setTags("")
            setLanguage("english")
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <h1 className="text-center text-bold text-white">New Word</h1>
        {/* Major container */}
        <div className="">
            {/* Container */}
            <div className="border border-solid p-4 my-4 rounded-xl bg-green-300">

                {/* Word */}
                <div className=" p-2">
                    <input type="text" name="" id="" 
                    placeholder="Word" 
                    className="w-full"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}/>
                </div>

                {/* Definition */}
                <div className="p-2">
                    <input type="text" 
                    name="" id="" 
                    placeholder="Type your definition here..."
                    className="w-full"
                    value={definition}
                    onChange={(e) => setDefinition(e.target.value)} />
                </div>

                {/* Example */}
                <div className="p-2">
                    <input type="text" 
                    name="" id="" 
                    placeholder="Example sentence..." 
                    className="w-full"
                    value={example}
                    onChange={(e) => setExample(e.target.value)}
                    />
                </div>

                {/* Tags */}
                <div className="p-2">
                    <input type="text" 
                    placeholder="Type a list of comma-separated tags..."
                    className="w-full"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)} />
                </div>

                {/* Language */}
                <div className="p-2">
                    <select name="" id="" value={language} 
                    onChange={(e) => setLanguage(e.target.value)}>
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
                    className="border-4 rounded-xl p-2 w-full font-bold"
                    onClick={submitHandler}>
                        Submit
                    </button>
                </div>
            </div>

        </div>


    </>
    
  )
}

export default NewWord