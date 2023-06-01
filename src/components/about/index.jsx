import React from 'react'
import "./style.scss"
import Section from '../shared/section';
import me2 from "../../images/me2.png";
const index = () => {
  return (
   <Section id="about" background={"dark"}>
            <div className='about-col-1'>
                <img
                   src={me2}
                   className="me2"
                />
            </div>
            <div className='about-col-2'>
                <h1 className="sub-title">Get to Know Me !</h1>
                <p>
                    Bonjour!! My name is Deepak Kushwaha. I am a captivating individual who effortlessly combines intelligence and creativity.
                    With an unwavering passion for web development and coding. I build front-end and back-end of websites/webapps that leads to success of 
                    overall product.
                    With an enthusiasm and a genuine eagerness to learn, I fearlessly embraces emerging technologies, pushing the boundaries of what's 
                    possible in the ever-evolving world of software engineering.
                </p>
                <div className='sub-title'>
                    <h2>Education </h2> 
                </div>
                <div className='Education'>
                             <ul>
                                <br/>
                                <li><span>Bachelor of Technology ( Computer Sc.)</span><br/> <p>Indian Institute of Information Technology, Agartala 2025</p></li>
                                <li><span>AISSCE (CBSE)</span><br/><p>The Aditya Birla Public School, Renukoot 2020</p></li>
                                <li><span>AISSE (CBSE) </span><br/><p>The Aditya Birla Public School, Renukoot 2018</p></li>
                            </ul>
                </div>
            </div>
   </Section>
  )
}

export default index