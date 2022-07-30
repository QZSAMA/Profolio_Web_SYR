

import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function About(){
    return(
        <div className="bg-dark text-white" >
            <Header></Header>
            <Container>
                <p className='intro'>Yiran is a rising senior design student, a graphic designer and a student leader based in New York. Her working experience is multidisciplinary from graphic design, curation, to marketing, etc. with various exhibitions, organizations, and social experience.</p>
                <div className='row g-sm-8'>
                    {/* <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    </div> */}
                    <div className='col-md-4'>
                        <p className='t about-title'>Working Experience</p>
                        <ul>
                            <li>
                                <span className='ri'>Project Management Intern, </span>
                                <span className='t'>Asia-UK Foundation, London(Remote) — May 2022 - Present</span>
                            </li>
                            <li>
                                <span className='ri'>Associate Director Assistant for Orientation, </span>
                                <span className='t'>School of Visual Arts, New York — May 2022 - Present</span>
                            </li>                            
                            <li>
                                <span className='ri'>Marketing Strategist Intern, </span>
                                <span className='t'>ArtsBerry, New York — Jan 2022 - Present</span>
                            </li>
                            <li>
                                <span className='ri'>Design Assistant, </span>
                                <span className='t'>CheersYou International Consulting, New York — Jan 2022 - Present</span>
                            </li>
                            <li>
                                <span className='ri'>Student Ambassador Tour Guide and Assistant of Admisssions, </span>
                                <span className='t'>School of Visual Arts, New York —  Feb 2020 - Present</span>
                            </li>
                            <li>
                                <span className='ri'>Design and Marketing Intern, </span>
                                <span className='t'>WeDesign Group Inc., New York(Remote) — May 2021 - Aug 2021</span>
                            </li>
                            <li>
                                <span className='ri'>Student Center Staff, </span>
                                <span className='t'>School of Visual Arts, New York — Aug 2021 - Present</span>
                            </li>
                            <li>
                                <span className='ri'>Design Intern, </span>
                                <span className='t'>Tree Museum, Beijing(Remote) — Dec 2020 - May 2021</span>
                            </li>
                            <li>
                                <span className='ri'>Exhibition Intern, </span>
                                <span className='t'>Today Art Museum, Beijing —  Jul 2019</span>
                            </li>
                            <li>
                                <span className='ri'>Curation and Exhibition Volunteer, </span>
                                <span className='t'>MeToo in China “ The Voiceless Rise Up”, New York —  Nov 2019</span>
                            </li>
                            <li>
                                <span className='ri'>Exhibition Staff, </span>
                                <span className='t'>Paradoxity NYC, New York — Oct 2019</span>
                            </li>
                            <li>
                                <span className='ri'>Exhibition Staff, </span>
                                <span className='t'>Slow Design Pop Up Show, New York — Sep 2019</span>
                            </li>
                            <li>
                                <span className='ri'>Marketing Intern, </span>
                                <span className='t'>Student Medicover Co. LLC, Beijing — Jun 2019 - Sep 2019</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div className='row g-sm-8'>                        
                            <p className='t about-title'>Exhibitions</p>
                            <ul>
                                <li>
                                    <span className='ri'>Omni Art Expo </span>
                                    <span className='t'>| 2021.07 - Shanghai</span>
                                </li>
                                <li>
                                    <span className='ri'>BFA Advertising & BFA Design: 2021 Spring Show </span>
                                    <span className='t'>| 2021.05 - 2021.06 - Online</span>
                                </li>
                                <li>
                                    <span className='ri'>In Solidarity: SVA Celebrates Its Asian and Asian American Communities </span>
                                    <span className='t'>| 2021.04 - 2021.05 - Online</span>
                                </li>
                                <li>
                                    <span className='ri'>CADA Design Memo </span>
                                    <span className='t'>| 2019.11 - New York</span>
                                </li>
                            </ul>
                        </div>
                        <div className='row g-sm-8'>                        
                            <p className='t about-title'>Organization Experience</p>
                            <ul>
                                <li>
                                    <span className='ri'>President, Chinese Students Organization of School of Visual Arts, </span>
                                    <span className='t'>Feb 2020 - Present</span>
                                </li>
                                <li>
                                    <span className='ri'>Council Member, New York Chinese Young Leaders Association(NPO), </span>
                                    <span className='t'>Jul 2021 - Present</span>
                                </li>
                                <li>
                                    <span className='ri'>Co-Founder and Designer, Light Your Hope(NGO), </span>
                                    <span className='t'>Mar 2018 - May 2018</span>
                                </li>
                                <li>
                                    <span className='ri'>Designer, LEAN IN SHANDONG(NGO), </span>
                                    <span className='t'>Feb 2018 - Apr 2018</span>
                                </li>                            
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row g-sm-8'>                      
                            <p className='t about-title'>Awards</p>
                            <ul>
                                <li>
                                    <span className='ri'>Graphis New Talent 2022 Silver Award </span>
                                    <span className='t'>| 2022</span>
                                </li>
                                <li>
                                    <span className='ri'>Silas H. Rhodes Scholarship </span>
                                    <span className='t'>| 2018-2022</span>
                                </li>
                                <li>
                                    <span className='ri'>Certificate of Talented by CADA </span>
                                    <span className='t'>| 2019</span>
                                </li>
                                <li>
                                    <span className='ri'>Dean's List High Herm Honors </span>
                                    <span className='t'>| 2019 - 2020</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className='row g-sm-8'>                        
                            <p className='t about-title'>Languages</p>
                            <ul>
                                <li>
                                    <span className='ri'>English, </span>
                                    <span className='t'>Professional working proficiency</span>
                                </li>
                                <li>
                                    <span className='ri'>Mandarin, </span>
                                    <span className='t'>Native language</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>            
            <Footer></Footer>
        </div>
  );
}

export default About;