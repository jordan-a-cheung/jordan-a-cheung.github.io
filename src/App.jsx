import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

// styles
import './App.css'

// import pages
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Weather from './pages/Weather.jsx'
import Music from './pages/Music.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
