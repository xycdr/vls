import { useState } from "react"; // Tambahkan ini
import { Link, useParams } from "react-router-dom"; // Tambahkan Link ke sini

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import NotFound from "./NotFound";
import cartIcon from "./img/icons/cart.svg";
import data from "./data/articles.json";

const ArticlesDetails = () => {
  const { id } = useParams();
  const articles = data.articles;
  const article = articles.find((article) => article.id.toString() === id);

  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Menggunakan useState

  if (!article) return <NotFound errorMessage={"article not found"} />;

  return (
    <main className="articles-details">
      <section className="articles-details-section section padding-block-end-14">
        {/* Swiper utama untuk gambar produk */}
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation, Thumbs]}
          breakpoints={{
            720: {
              navigation: {
                enabled: false,
              },
              allowTouchMove: false,
              slidesPerView: 4,
            },
          }}
          className="articles-details-photos margin-block-start-10"
        >
          <SwiperSlide>
            <img src={require(`${article.cover}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`${article.sticker}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide className="can-hover">
            <img src={require(`${article.preview_front}`)} alt="" />
            {article.preview_back && (
              <img
                className="img-hover"
                src={require(`${article.preview_back}`)}
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`${article.preview}`)} alt="" />
          </SwiperSlide>
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          preventClicksPropagation={false}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="articles-details-thumbs container margin-block-start-6"
        >
          <SwiperSlide>
            <img src={require(`${article.cover}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`${article.sticker}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`${article.preview_front}`)} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`${article.preview}`)} alt="" />
          </SwiperSlide>
        </Swiper>

        {/* Deskripsi Artikel */}
        <div className="articles-details-desc container flow margin-block-start-6">
          <h1 className="fs-700 fw-default uppercase margin-block-end-6">
            {article.name}
          </h1>
          <p className="fs-200">{article.desc}</p>

          <div>
            <Link target={"_blank"} to={article.shopee_path}>
              <button className="button shop primary fs-400 clr-accent-800 fw-bold box-shadow-1">
                Produk Lainnya
                <div>
                  <img src={cartIcon} alt="" />
                </div>
              </button>
            </Link>
            <Link target={"_blank"} to={article.whatsapp_path}>
              <button className="button shop primary fs-400 clr-accent-800 fw-bold box-shadow-1 margin-block-start-8">
                Order by WhatsApp
                <div>
                  <img src={cartIcon} alt="" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticlesDetails;
