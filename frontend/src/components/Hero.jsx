import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import WordCard from "../reusable-components/WordCard"

const Hero = () => {
  return (
    <>
        <div>
            <div>
                <div></div>
                {/* Navbar */}
                <div>
                    <NavBar/>
                </div>

                {/* Inner Hero Content */}
                <div className="bg-gray-100 h-auto">
                    <div>
                        <div>
                            <SearchBar/>
                        </div>

                    </div>

                    {/* Words */}
                    <div>
                        <WordCard
                        wordTitle = "Wahala"
                        origin = "Nigerian"
                        username = "username123"
                        dateAdded = "May 15, 2009"
                        wordDef = "Trouble or problem. "
                        />

                        <WordCard
                        wordTitle = "Bomboclaat"
                        origin = "Jamaican"
                        username = "rastaman34"
                        dateAdded = "Sep 12, 2019"
                        wordDef = "Used when one is stressed "
                        />

                        <WordCard
                        wordTitle = "Chale"
                        origin = "Ghanaian"
                        username = "egglover4eva"
                        dateAdded = "Jan 05, 2012"
                        wordDef = "Buddy or friend. Chale how we go do am. "
                        />
                    </div>
                    
                </div>

                
            </div>
        </div>
    </>
  )
}

export default Hero