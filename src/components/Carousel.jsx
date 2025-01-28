import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/baner.jpg"; // 1200x400

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}>
        <Slider {...settings}>
          <div>
            <img
              src={banner1}
              alt="Banner 1"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transform: "scale(0.6)", // Zoom out menjadi 80%
                transformOrigin: "center", // Memastikan gambar tetap di tengah
              }}
            />
          </div>
          <div>
            <img
              src={banner1}
              alt="Banner 2"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transform: "scale(0.6)", // Zoom out menjadi 80%
                transformOrigin: "center", // Memastikan gambar tetap di tengah
              }}
            />
          </div>
          <div>
            <img
              src={banner1}
              alt="Banner 3"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transform: "scale(0.6)", // Zoom out menjadi 80%
                transformOrigin: "center", // Memastikan gambar tetap di tengah
              }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomCarousel;
