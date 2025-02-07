import NavBar from "./NavBar"
import SearchBar from "./SearchBar"

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
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero