// files
import resume from './assets/home/resume-jorch-11.22.26.pdf'

// styles
import './App.css'

function Nav() {
    return (
        <nav className="nav-bar">
            <h1>
                <div className="wordmark">
                <a href="/">Jordan Cheung</a>
                </div>
            </h1>
            <a href={resume} target="_blank">Resumé</a>
            {/* <a href="https://docs.google.com/document/d/1ZY5kjMerwqb-nljdBu77oV2R3gXiWMTi0CKA6PhmHTw/edit?usp=sharing" target="_blank">Writing</a> */}
            {/* <div class="subnav">Honors Portfolio
                <div class="subnav-content">
                <a href="/honors-portfolio/about-honors.html">About Honors</a>
                <a href="/honors-portfolio/autumn-2026.html">Autumn 2026</a>
                </div>
            </div> */}
        </nav>
    )
}

export default Nav