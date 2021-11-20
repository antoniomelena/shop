import React from "react";
// import pizza from "../images/pizza.jpg";
// import bpc from "../images/bpcabove.webp";

const Home = () => {
  return (
    <div className="home">
      <section
        className="intro"
        // style={{
        //   backgroundImage: `url(${bpc})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        <div className="container">
          <h1 className="intro__title">Lorem ipsum dolor</h1>
          <h1 className="intro__title intro__title--colored">Lorem dolor</h1>
        </div>
      </section>
      <section className="section-two">
        <div className="container">
          <h2>Quality</h2>
          <div className="row">
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.
              </p>
            </div>
            <div className="col">
              <p>
                Felis donec et odio pellentesque diam volutpat. Aliquam purus
                sit amet luctus venenatis. Turpis in eu mi bibendum neque
                egestas congue quisque egestas. Pellentesque sit amet porttitor
                eget dolor morbi non.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="container row">
          <div className="col">
            <div className="iframe__wrapper">
              <iframe
                src="https://www.youtube.com/embed/QCsx2ax39sM"
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              maiores, suscipit consequuntur iste ducimus ipsam quisquam
              voluptatem ut eos quibusdam corporis tenetur voluptas eaque
              excepturi nostrum porro nisi. Debitis quae, cumque eligendi
              tempora suscipit quisquam esse consequatur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
