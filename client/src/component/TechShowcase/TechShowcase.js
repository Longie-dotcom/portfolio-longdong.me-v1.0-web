import { useEffect } from 'react';
import './TechShowcase.css';
import TEXT from '../../assets/TEXT';

import CSharp from '../../assets/pictures/CSharp.png';
import CSS3 from '../../assets/pictures/CSS3.png';
import HTML5 from '../../assets/pictures/HTML5.png';
import Java from '../../assets/pictures/Java.png';
import JavaScript from '../../assets/pictures/JavaScript.png';
import Node from '../../assets/pictures/Node.png';
import MongoDB from '../../assets/pictures/MongoDB.png';
import Figma from '../../assets/pictures/Figma.png';
import DrawIO from '../../assets/pictures/DrawIO.png';
import SQL from '../../assets/pictures/SQL.png';
import ReactImg from '../../assets/pictures/React.png';
import RaspberryPi from '../../assets/pictures/RaspberryPi.png';
import WPF from '../../assets/pictures/WPF.png';
import ASP from '../../assets/pictures/ASP.png';
import RestAPI from '../../assets/pictures/RestAPI.png';
import Nginx from '../../assets/pictures/Nginx.png';
import Cat from '../../assets/pictures/cat.png';

function TechShowcase() {
    useEffect(() => {
        const rows = document.querySelectorAll('.tech-icon');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.2 }
        );

        rows.forEach((row) => observer.observe(row));

        return () => observer.disconnect();
    }, []);

    return (
        <div id="TechShowcase">
            <div className='desc'>
                <div className='detail'>
                    <div className='my-image'>
                        <img src={Cat} />
                    </div>
                    <div>
                        <div className='title'>
                            {TEXT.tech_showcase_title}
                        </div>
                        <div>{TEXT.tech_showcase_description}</div>
                    </div>
                </div>
            </div>

            <div className='show-case'>
                <div className='row'>
                    <h3 className="tech-section-title row-1">{TEXT.tech_showcase_subtitle_1}</h3>
                    <div className="tech-icon-row">
                        <img src={Java} alt="Java" className="tech-icon" />
                        <img src={JavaScript} alt="JavaScript" className="tech-icon" />
                        <img src={HTML5} alt="HTML5" className="tech-icon" />
                        <img src={CSS3} alt="CSS3" className="tech-icon" />
                        <img src={CSharp} alt="C#" className="tech-icon" />
                    </div>
                </div>

                <div className='row'>
                    <h3 className="tech-section-title row-2">{TEXT.tech_showcase_subtitle_2}</h3>
                    <div className="tech-icon-row">
                        <img src={ReactImg} alt="ReactJS" className="tech-icon" />
                        <img src={Node} alt="Node.js" className="tech-icon" />
                        <img src={ASP} alt="ASP.NET Core" className="tech-icon" />
                        <img src={WPF} alt="WPF" className="tech-icon" />
                    </div>
                </div>

                <div className='row'>
                    <h3 className="tech-section-title row-3">{TEXT.tech_showcase_subtitle_3}</h3>
                    <div className="tech-icon-row">
                        <img src={MongoDB} alt="MongoDB" className="tech-icon" />
                        <img src={SQL} alt="SQL" className="tech-icon" />
                        <img src={RestAPI} alt="REST API" className="tech-icon" />
                    </div>
                </div>

                <div className='row'>
                    <h3 className="tech-section-title row-4">{TEXT.tech_showcase_subtitle_4}</h3>
                    <div className="tech-icon-row">
                        <img src={Figma} alt="Figma" className="tech-icon" />
                        <img src={DrawIO} alt="Draw.IO" className="tech-icon" />
                        <img src={RaspberryPi} alt="Raspberry Pi" className="tech-icon" />
                        <img src={Nginx} alt="Nginx" className="tech-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechShowcase;
