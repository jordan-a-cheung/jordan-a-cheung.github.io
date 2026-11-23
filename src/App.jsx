import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

// styles
import './App.css'

// import pages
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
