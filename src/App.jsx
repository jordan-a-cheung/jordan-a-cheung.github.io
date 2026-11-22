import jordanFace from './assets/home/jordan-in-portland.jpg'
import resume from './assets/home/resume-jorch-11.22.26.pdf'
import designBrief from './assets/home/JC - Final Design Brief - VCD.pdf'

import writingPrev from './assets/home/projects/writing samples preview.png'
import vcdPrev from './assets/home/projects/vcd preview.png'
import rvfbPrev from './assets/home/projects/rvfb preview.png'
import protoPrev from './assets/home/projects/proto preview.png'
import physCompPrev from './assets/home/projects/physical computing preview.jpeg'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <body>
      <nav className="nav-bar">
        <h1>
          <div className="wordmark">
            <a href="/index.html">Jordan Cheung</a>
          </div>
        </h1>
        <a href={resume} target="_blank">Resumé</a>
        <a href="https://docs.google.com/document/d/1ZY5kjMerwqb-nljdBu77oV2R3gXiWMTi0CKA6PhmHTw/edit?usp=sharing" target="_blank">Writing</a>
        {/* <div class="subnav">Honors Portfolio
          <div class="subnav-content">
            <a href="/honors-portfolio/about-honors.html">About Honors</a>
            <a href="/honors-portfolio/autumn-2026.html">Autumn 2026</a>
          </div>
        </div> */}
      </nav>

      <div className="about-me">

        <div className="bio">
          <h1>
            <strong>Jordan Cheung </strong>
            <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>(she/they)</span>
          </h1>
          <br />
          <p>
            I am a proud New Jerseyan studying <a href="https://www.hcde.washington.edu/">Human Centered Design & Engineering</a> at the University of Washington in Seattle. I’m passionate about documentation and believe that clear, thoughtfully designed information is a powerful form of care. 
            <br /><br />
            I develop content and systems that empower humans to express themselves and find joy with beautiful, innovative, and accessible products.
            <br /><br />
            I am an avid choral singer, graphic novel reader, and rock climber with hundreds of music playlists!
            This site was last updated in <a href="https://open.spotify.com/playlist/6Dnw8und7r5k3dzfkmC2X4?si=7aab09d2a5bf4304">November 2026</a>.
            <br /><br />
            <div className="disclaimer">
              <i>Note: </i>
                I am coding this website by hand to further develop my programming skills. 
                I'm coding with React, JavaScript, and CSS. This page is deployed via GitHub Pages.
                I use AI for concept explanations and code examples, but no big chunks are copy-pasted. 
                My goal is to understand what every line of code does.
            </div>
          </p>
        </div>

        <div className="my-face">
          <img src={jordanFace} alt="Jordan on a balcony smiling with Portland in the background." />
          <br />
          ✉️ <a href="mailto:jordanalexacheung@gmail.com">jordanalexacheung@gmail.com</a>
          <br />
          🔗 <a href="https://www.linkedin.com/in/jordanacheung/">linkedin.com/in/jordanacheung</a>
        </div>

      </div>

      <br />
      <hr />
      <br />

      <div className="projects">
        <h1>Projects</h1>
        <div className="grid">
          <div className="project">
            <a href="https://docs.google.com/document/d/1ZY5kjMerwqb-nljdBu77oV2R3gXiWMTi0CKA6PhmHTw/edit?usp=sharing" target="_blank">
            <h2>Writing samples</h2>
            <img src={writingPrev} alt="The Apple, AWS, and RAPID Facility logos over a document icon." />
            Technical writing and instructional design works.
            </a>
          </div>
          <div className="project">
            <a href={designBrief} target="_blank">
              <h2>Visual communications</h2>
              <img src={vcdPrev} alt="A redesign of the Seattle Jazz Fellowship's logo." />
              My redesign of the Seattle Jazz Fellowship brand system.
            </a>
          </div>
          <div className="project">
            <a href="https://www.hcde.washington.edu/news/article/2026-08-25/how-hcde-students-helped-rainier-valley-food-bank-see-its-community-new" target="_blank">
              <h2>Food bank service design</h2>
              <img src={rvfbPrev} alt="Sketch of a grocery limit sign, high-fidelity limit sign, and guideline card. Rainier Valley Food Bank." />
              My team's end-to-end design improvements for a local food bank.
            </a>
          </div>
          <div className="project">
            <a href="https://jcheung321.github.io/hcde439/">
              <h2>Physical computing</h2>
              <img src={physCompPrev} alt="The top view of a circuit with a joystick and potentiometer." />
              Assignment documentation.
            </a>
          </div>
          <div className="project">
            <a href="https://jxcheung.substack.com/t/hcde351" target="_blank">
              <h2>Prototyping exploration</h2>
              <img src={protoPrev} alt="A 3D-printed dinosaur with guitar picks as spines down its back." />
              Assignment documentation.
            </a>
          </div>
        </div>
        <br />
        {/* <ul>
          <li><strong>Writing samples</strong>: <a href="https://docs.google.com/document/d/1ZY5kjMerwqb-nljdBu77oV2R3gXiWMTi0CKA6PhmHTw/edit?usp=sharing" target="_blank">Technical writing and instructional design works.</a></li>
          <li><strong>Visual communications</strong>: My redesign of the <a href={designBrief} target="_blank">Seattle Jazz Fellowship brand system</a>.</li>
          <li><strong>Service design</strong>: My team's end-to-end <a href="https://www.hcde.washington.edu/news/article/2026-08-25/how-hcde-students-helped-rainier-valley-food-bank-see-its-community-new" target="_blank">design improvements for a local food bank</a>.</li>
          <li><strong>Prototyping explorations</strong>: <a href="https://jxcheung.substack.com/t/hcde351" target="_blank">Mini projects</a>!</li>
          <li><strong>Physical computing adventures</strong>: <a href="https://jcheung321.github.io/hcde439/">Assignment documentation</a>!</li>
        </ul> */}
      </div>

      <footer>
        <br />
        Copyright &copy; 2026 Jordan Cheung. All rights reserved.
      </footer>
    </body>
  )
}

export default App
