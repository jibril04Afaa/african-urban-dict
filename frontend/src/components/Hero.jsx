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
                <div className="bg-gray-100 h-96">
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
                    </div>
                    
                </div>

                
            </div>
        </div>
    </>
  )
}

export default Hero