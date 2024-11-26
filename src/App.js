import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import NewWord from "./components/NewWord"
import Home from "./components/Home"

export const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-word" element={<NewWord/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App