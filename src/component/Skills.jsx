import Office365 from "../assets/Office365.png";
import JavaScript from "../assets/JavaScript.png";
import HTML5 from '../assets/HTML5.png'
import React from '../assets/React.png'
import CSS from '../assets/CSS.png'
import SQLServer from '../assets/Sql-Server.png'
import '../style/Skills.css'


function Skills() {
    
    return (

        <div className="Skills">
        <h1>Skills</h1>

        <div className="Skills-img">
 
        <img src={React} alt="React" /><h2>React.Js</h2>
        <img src={JavaScript} alt="JavaScript" /><h2>JavaScript</h2>
        <img src={Office365} alt="Microsoft Office 365" /><h2>Microsoft Office 364</h2>
        <img src={HTML5} alt="HTML" /><h2>HTML 5</h2>
        <img src={CSS} alt="CSS" /> <h2>CSS 3</h2>
        <img src={SQLServer} alt="SQL-Server" /> <h2>SQL-Server</h2>


        </div>
        </div>
    )
}

export default Skills