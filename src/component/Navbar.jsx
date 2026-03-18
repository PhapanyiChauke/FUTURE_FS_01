
import Home from '../assets/home.png';
import AboutMe from '../assets/about me.svg';
import Skills from '../assets/Skills.png'
import Experience from '../assets/work experience.png';
import Qualification from '../assets/qualification.png';
import '../style/Navbar.css';

import { useEffect, useState } from 'react';


function Navbar() {

    const [ScrollChangeColour, setScrollChangeColour] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutme = document.getElementById("AboutMe");
            const contact = document.getElementById("Contact");

            if(
                window.scrollY >=aboutme.offsetTop - 100 && window.scrollY < contact.offsetTop - 100
            )
            {
                setScrollChangeColour(true);
            } else {
                setScrollChangeColour(false);
            }
            
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);


return (

    <div className ={ScrollChangeColour ? "Navbar glass" : "Navbar"}>

        <a href="#Introduction"><button><img src={Home} alt='Home'/></button></a>

        <a href="#AboutMe"><button><img src={AboutMe} alt='AboutMe'/></button></a>

        <a href="#Skills"><button><img src={Skills} alt='Skills'/></button></a>

        <a href="#Qualification"><button><img src={Qualification} alt='Qualification'/></button></a>

        <a href="#Experience"><button><img src={Experience} alt='Experience'/></button></a>
    </div>
)

}
export default Navbar