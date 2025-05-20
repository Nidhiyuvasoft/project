import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route></Route>
      </Routes>
       <Footer/>
     </Router>
    </>
  )
}

export default App
