import Header from './Header';

function Home(){
    return(
        <div className="bg-dark text-white">
            <Header/>
            <h6 className='text-center l'>Choose to browse projects</h6>
            <div class="box">
                <div class="card">卡片1</div>
                <div class="card">卡片2</div>
                <div class="card">卡片3</div>
                <div class="card">卡片4</div>
                <div class="card">卡片5</div>
                <div class="card">卡片6</div>
            </div>
            <h6 className='text-center l'>Illustration</h6>
                <div class="card">卡片1</div>
                <div class="card">卡片2</div>
            <h6 className='text-center l'>Other Works</h6>
        </div>
  );
}

export default Home;