// components
import Nav from '../components/Nav.jsx'
import Foot from '../components/Foot.jsx'

// styles
import '../App.css'

const url = 'https://api.weather.gov/points/47.6555,-122.303200'
// i think i need to use openweather because this api doesn't provide current conditions

function Weather() {
    return (
        <div>
            <Nav />
            <h1>Weather widget</h1>
            <br />
            <p>I want the weather to appear here!</p>
            <Foot />
        </div>
    )
}

export default Weather