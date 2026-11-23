// ma face
import jordanFace from './assets/home/jordan-in-portland.jpg'

// styles
import './App.css'

function About() {
    return (
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
    )
}

export default About