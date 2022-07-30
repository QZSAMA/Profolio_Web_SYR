

import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function About(){
    return(
        <div className="bg-dark text-white" >
            <Header></Header>
            <Container>
                <div>
                    <p >
                    Yiran is a rising senior design student, a graphic designer and a student leader based in New York. Her working experience is multidisciplinary from graphic design, curation, to marketing, etc. with various exhibitions, organizations, and social experience.
                    </p>
                    <div>
                        <h1 className='t'>Working Experience</h1>
                        <ul>
                            <li>
                                <span className='ri'>Project Management Intern,</span>
                                <span className='t'>Asia-UK Foundation, London(Remote) — May 2022 - Present</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </Container>            
            <Footer></Footer>
        </div>
  );
}

export default About;