import Navbar from "./components/Navbar"
import WordCard from "./components/WordCard"


const App = () => {
  return (
    <>
      {/* Major container */}
      <div className="bg-green-950">
        <Navbar/>
        {/* Word Cards Container */}
        <div className="p-4">

          <WordCard
          word = "fanfooling"
          meanings = "engaging in foolish or stupid activites or foolhardiness"
          examples = "Shon the fanfooling and give me my money"
          origin = "Ghana"
          byUser = "charley419"
          dateAdded = "April 27, 2019"
          />

          <WordCard
          word = "bomboclaat"
          meanings = "used when one is stressed"
          examples = "Bomboclat. I just lost my wallet today."
          origin = "Jamaica"
          byUser = "blackAfrican2345"
          dateAdded = "November 15, 2020"
          />

          <WordCard
          word = "chale"
          meanings = "buddy/friend"
          examples = "chale how we go do am"
          origin = "Ghana"
          byUser = "datoneguy"
          dateAdded = "February 12, 2017"
          />
        </div>
      </div>
      
    </>
  )
}

export default App