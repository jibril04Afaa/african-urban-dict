import Navbar from "./components/Navbar"
import WordCard from "./components/WordCard"

const App = () => {
  return (
    <>
      <Navbar/>
      {/* Word Cards Container */}
      <div>
        <WordCard
        word = "bomboclat"
        meanings = "used when one is stressed"
        examples = "Bomboclat. I just lost my wallet today."
        byUser = "blackAfrican2345"
        dateAdded = "November 15, 2020"
        />

        <WordCard/>

        <WordCard/>
      </div>
    </>
  )
}

export default App