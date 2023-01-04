import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carrossel.module.css";
import { settings, banners } from "./config";

function Carrossel() {
  
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {banners.map((item) => {
            return (
              <div>
                <div
                  className={styles.imagem}
                  style={{
                    backgroundImage: `url(${item.foto})`,
                    height: "22vw",
                    cursor: "pointer"
                  }}
                >
                </div>
              </div>
            );
        })}
      </Slider>
    </div>
  );
}

export default Carrossel;
