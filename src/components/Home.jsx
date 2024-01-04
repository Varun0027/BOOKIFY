import React from 'react';
import Header from './LS/header';
import '../Assets/Css/home.css';
import Footer from '../components/LS/Footer';
// import Swiss from '../Vid/swisstrain.mp4';

const Card = ({ image, header, content }) => (
  <div className="card" data-image={image}>
    <h1 className="header">{header}</h1>
    <p className="content">{content}</p>
  </div>
);

const Home = () => {
  return (
    <>
      <Header />
      
      <div className="main">
        <h1 className="title"></h1>
        <h2></h2>
        <h2></h2>
      <div className="container">
      {/* <video width="2048" height="1365"  className="video-background" autoPlay loop muted>
          <source src={Swiss} type="video/mp4" />
        </video> */}
      {/* <h1 className="cap">Ecstacy of Swiss</h1> */}
        {/* Geneva */}
                                               
        {/* Basel */}
        <div className="card">
          <img
          src="https://marketplace.canva.com/EAFSw3t08lg/1/0/1003w/canva-black-mystery-novel-book-cover-zRJPsYKih38.jpg"
            alt="asd"
          />
          <div className="content">
            <h1 className="font">SPEAR</h1>
            <h2></h2>
            <center>
            {/* <h2 className="font">Popular📈</h2> */}
            {/* <h2></h2> */}
            <h2 className="font">⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>
        <div className="card">
          <img
          src="https://cdn.create.vista.com/downloads/2b2f39fb-513c-47eb-a041-4e98f143815b_360.jpeg"
            alt="asd"
          />
          <div className="content">
            <h1 className="font">JOURNEY</h1>
            <h2></h2>
            <center>
            {/* <h2 className="font">Popular📈</h2> */}
            {/* <h2></h2> */}
            <h2 className="font">⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>

        {/* Zurich */}
        <div className="card">
          <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
            alt="ssd"
          />
          <div className="content">
            <h1 className="font">MEMORY</h1>
            <h2></h2>
            <center>

            <h2 className="font">⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>
        <div className="card">
          <img
          src="https://i.guim.co.uk/img/media/f240646abc74169ca57777103a797d9a9f2b9f09/0_0_2359_3543/master/2359.jpg?width=700&quality=85&auto=format&fit=max&s=a2ebf008cd767bf5162feadb9dc60b98"
            alt="ssd"
          />
          <div className="content">
            <h1 className="font">Harry Potter</h1>
            <h2></h2>
            <center>

            <h2 className="font">⭐⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>
        <div className="card">
          <img
          src="https://i.pinimg.com/736x/94/ba/2e/94ba2e19d66aaadeafbd8427db7c34ca.jpg"
            alt="ssd"
          />
          <div className="content">
            <h1 className="font">Silent Stalker</h1>
            <h2></h2>
            <center>

            <h2 className="font">⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>
        <div className="card">
          <img
          src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
            alt="ssd"
          />
          <div className="content">
            <h1 className="font">ALONE</h1>
            <h2></h2>
            <center>

            <h2 className="font">⭐⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>
        <div className="card">
          <img
          src="https://s26162.pcdn.co/wp-content/uploads/2020/11/71HSe7Kt-xL.jpg"
            alt="ssd"
          />
          <div className="content">
            <h1 className="font">LEAVE</h1>
            <h2></h2>
            <center>

            <h2 className="font">⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
          </div>
        </div>

        {/* Saint Moritz*/}
        <div className="card">
          <img
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/10/the-50-coolest-book-covers-47.jpg"
            alt="hsj"
          />
          <div className="content">
            <h1 className="font">JAWS</h1>
            <h2></h2>
            <center>
            <h2 className="font">⭐⭐⭐⭐</h2>
            </center>
            <a href="/product">Explore</a>
  
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Home;