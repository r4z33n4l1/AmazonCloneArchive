import React from "react";
import "./Home.css";
import Product from "./Product";
import Data from "./source.json";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684223_.jpg"
        alt=""
      />
      {Data.map((item) => {
        return (
          <div className="home__row">
            <Product
              id={item.asin}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
