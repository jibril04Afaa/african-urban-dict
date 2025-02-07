import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import NewWord from './components/NewWord'
import Error from './components/Error'

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Hero/>}></Route> {/* Home Route*/}
          <Route path='/new-word' element={<NewWord/>}></Route> {/* New Word Route*/}
          <Route path='*' element={<Error/>}></Route> {/* Error Route */}
        </Routes>

      </Router>
    </>
  );
}

export default App;
