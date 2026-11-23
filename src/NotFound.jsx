// styles
import './App.css'

// components
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'

function NotFound() {
  return (
    <body>
        <Nav />
        <h1>
          404: Page not found
        </h1>
        <br />
        <p>
          Unable to find requested page.
        </p>
        <Foot />
    </body>
  )
}

export default NotFound