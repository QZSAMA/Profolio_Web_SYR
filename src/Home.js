import Header from './Header';
import img_apo from "./assets/img/apo.svg"
import img_tendo from "./assets/img/tendo.svg"
import img_change from "./assets/img/change.png"

import Container from 'react-bootstrap/Container';
import img_ill_1 from "./assets/img/ill_1.png"
import img_ill_2 from "./assets/img/ill_2.png"

function Home(){
    return(
        <div className="bg-dark text-white">
            <Header  val='0'/>
            <Container>
                <h6 className='text-center l'>Choose to browse projects</h6>
                <div className="box">
                    <img src={img_tendo} alt="Tendo Box" className="card"/>
                    <img src={img_apo} alt="Apo Reef" className="card"/>
                    <img src={img_change} alt="Change!" className="card"/>
                    <img src={img_tendo} alt="Tendo Box" className="card"/>
                    <img src={img_apo} alt="Apo Reef" className="card"/>
                    <img src={img_change} alt="Change!" className="card"/>
                    <img src={img_tendo} alt="Tendo Box" className="card"/>
                    <img src={img_apo} alt="Apo Reef" className="card"/>
                    <img src={img_change} alt="Change!" className="card"/>
                    <img src={img_tendo} alt="Tendo Box" className="card"/>
                    <img src={img_apo} alt="Apo Reef" className="card"/>
                    <img src={img_change} alt="Change!" className="card"/>
                    {/* <img src={img_apo} alt="Item 1" className="card"/>
                    <img src={img_apo} alt="Item 1" className="card"/>
                    <img src={img_apo} alt="Item 1" className="card"/>
                    <img src={img_apo} alt="Item 1" className="card"/>                 */}
                </div>
                <h6 className='text-center l'>Illustration</h6>
                    <div className="row text-center">
                        <div className="col text-center">
                            <img src={img_ill_1} className="hover-card"/>
                            <span>
                                <h1 className="hidden">Digital</h1>
                            </span>
                        </div>
                        <div className="col text-center">
                            <img src={img_ill_2} className="hover-card"/>
                            <span>
                                <h1 className="hidden">Traditional</h1>
                            </span>
                        </div>
                    </div>
                <h6 className='text-center l'>Other Works</h6>
            </Container>
        </div>
  );
}

export default Home;