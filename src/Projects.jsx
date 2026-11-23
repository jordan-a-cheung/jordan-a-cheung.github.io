// styles
import './App.css'

// files
import designBrief from './assets/home/JC - Final Design Brief - VCD.pdf'

// project images
import writingPrev from './assets/home/projects/writing samples preview.png'
import vcdPrev from './assets/home/projects/vcd preview.png'
import rvfbPrev from './assets/home/projects/rvfb preview.png'
import protoPrev from './assets/home/projects/proto preview.png'
import physCompPrev from './assets/home/projects/physical computing preview.jpeg'

function Projects () {
    return (
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
      </div>
    )
}

export default Projects