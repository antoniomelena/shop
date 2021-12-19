import React from 'react';
import { Link } from 'react-router-dom';
import bpc from '../images/bpcabove.webp';
import hero from '../images/hero.jpg';

const Home = () => {
  return (
    <div className="home">
      <section
        className="intro"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <h1 className=" intro__title intro__title--colored">the soap shop</h1>
          <h1 className="intro__title intro__title--regular">
            Suds That Soothe
          </h1>
          <Link exact to="/products">
            <button href="/products" className="button">
              Buy Now
            </button>
          </Link>
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
              />
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
      <section className="section-two">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.
              </p>
            </div>
            <div className="col">
              <img src={bpc} alt="three bars of soap" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
