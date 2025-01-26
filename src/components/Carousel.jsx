import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hijab1 from "../assets/images/hijab1.jpg";
import hijab2 from "../assets/images/hijab2.jpg";
import hijab3 from "../assets/images/hijab3.jpg";

const CustomCarousel = () => {
  const settings = {
    dots: true, // Tampilkan indikator dots
    infinite: true, // Infinite loop
    speed: 500, // Kecepatan transisi (ms)
    slidesToShow: 1, // Jumlah slide yang ditampilkan
    slidesToScroll: 1, // Jumlah slide yang digeser
    autoplay: true, // Autoplay
    autoplaySpeed: 3000, // Interval autoplay (ms)
    arrows: true, // Tampilkan panah navigasi
    pauseOnHover: true, // Jeda autoplay saat hover
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
      <div style={{ width: "80%", maxWidth: "400px", textAlign: "center" }}>
        <Slider {...settings}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={hijab1} // Gunakan gambar yang diimpor
              alt="Promo 1"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={hijab2} // Gunakan gambar yang diimpor
              alt="Promo 2"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={hijab3} // Gunakan gambar yang diimpor
              alt="Promo 3"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomCarousel;
