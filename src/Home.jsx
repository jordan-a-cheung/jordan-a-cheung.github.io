// styles
import './App.css'

// components
import Nav from './Nav.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Foot from './Foot.jsx'
import Weather from './Weather.jsx'

function Home() {
    return (
        <body>
            <Nav />
            <About />
            <br />
            <hr />
            <br />
            <Projects />
            <Foot />
        </body>
    )
}

export default Home