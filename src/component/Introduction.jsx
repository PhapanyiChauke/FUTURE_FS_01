
import "../style/Introduction.css"
import Image from "../assets/Mohau.jpg"
import LinkedIn from '../assets/LinkedIn.png'
import GitHub from '../assets/GitHub.png'
import Message from '../assets/Message.png'

function Introduction() {
     return (

        <div className="Introduction">
            <div className="Introduction-Text">
            <h1>Greeting, I am Phapanyi Mohau Chauke</h1>
            <p>Full Stack Developer who loves web development and UI/UX design. Passionate about turning ideas into fully functional projects.</p>


            <div className="Button">

            <a href="https://www.linkedin.com/in/phapanyi-chauke-696686261/"><button><img src={LinkedIn} alt='LinkedIn'/></button></a>
            <a href="https://github.com/PhapanyiChauke"><button><img src={GitHub} alt='GitHub'/></button></a>
            <a href="#Contact"><button><img src={Message} alt='Message'/></button></a>

            </div>

            </div>

            <img src={Image} alt="image"/>

        </div>
     )

}
export default Introduction