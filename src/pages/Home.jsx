// styles
import '../App.css'

// components
import Nav from '../components/Nav.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Foot from '../components/Foot.jsx'
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