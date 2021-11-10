import React from "react";
import bpc from "../images/bpcabove.webp";
import crueltyFree from "../images/cruelty-free.webp";
import noAddedColors from "../images/no-additives.webp";

const Home = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          backgroundImage: `url(${bpc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="rtext">
          <h1>Lorem ipsum dolor.</h1>
          <h1 className="color">Lorem dolor.</h1>
        </div>
      </div>
      <div className="iframe-icons">
        <img src={crueltyFree} alt="cruelty free" />
        <img src={noAddedColors} alt="no added colors" />
      </div>
      <div className="iframe-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QCsx2ax39sM"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="iframe-text">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            maiores, suscipit consequuntur iste ducimus ipsam quisquam
            voluptatem ut eos quibusdam corporis tenetur voluptas eaque
            excepturi nostrum porro nisi. Debitis quae, cumque eligendi tempora
            suscipit quisquam esse consequatur. Quas, minus voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
