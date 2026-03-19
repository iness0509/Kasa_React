import "./style_banner.css";
import BannerImg from "../../assets/banner.jpg";

function Banner() {
  return (
    <section className="kasa-banner">
      <img
        className="kasa-banner-img"
        src={BannerImg}
        alt="la bannière"
      />
      <p className="kasa-banner-text">
        Chez vous, partout et ailleurs
      </p>
    </section>
  );
} 

export default Banner;

