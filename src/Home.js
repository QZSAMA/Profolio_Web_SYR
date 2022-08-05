import Header from './Header';

function Home(){
    return(
        <div className="bg-dark text-white">
            <Header val='0'/>
            <h6 className='text-center l'>Choose to browse projects</h6>
            <div className="box">
                <div className="card">卡片1</div>
                <div className="card">卡片2</div>
                <div className="card">卡片3</div>
                <div className="card">卡片4</div>
                <div className="card">卡片5</div>
                <div className="card">卡片6</div>
            </div>
            <h6 className='text-center l'>Illustration</h6>
                <div className="card">卡片1</div>
                <div className="card">卡片2</div>
            <h6 className='text-center l'>Other Works</h6>
        </div>
  );
}

export default Home;