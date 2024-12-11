import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import title from "./img/logo.svg";
import satsuneIcon from "./img/icons/satsune.svg";
import data from "./data/home.json";

const Home = () => {
  const home = data.home;

  return (
    <main className="main">
      <section className="hero-section section text-center">
        <div
          className="headline mx-auto margin-block-start-15"
          style={{ width: "max-content" }}
        >
          <img
            className="img-size-title margin-block-end-2"
            src={title}
            alt="Logo"
          />
          <h2 className="fw-default fs-100 clr-primary-000 text-right">
            {home.subtitle}
          </h2>
        </div>
        <Link to={"/articles"}>
          <button className="button primary fs-400 fw-bold box-shadow-1 margin-block-start-12">
            <span>See our articles</span>
          </button>
        </Link>
        <div className="satsune-icon left">
          <img src={satsuneIcon} alt="Satsune Icon" />
          <div className="line"></div>
        </div>
        <div className="satsune-icon right">
          <img src={satsuneIcon} alt="Satsune Icon" />
          <div className="line"></div>
        </div>
      </section>
      <section className="gallery-slider section padding-block-end-14">
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          allowTouchMove={false}
          loop={true}
          speed={7000}
          autoplay={{
            delay: 1,
            disableOnIteration: false,
          }}
          breakpoints={{
            540: {
              slidesPerView: 3,
            },
            720: {
              slidesPerView: 4,
            },
            1080: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {home.preview_paths.map((path, index) => {
            const imagePath = require(`${path}`);
            return (
              <SwiperSlide key={index} className="img-slider">
                <img src={imagePath} alt={`Preview ${index + 1}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

export default Home;