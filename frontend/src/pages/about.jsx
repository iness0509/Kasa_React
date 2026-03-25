import Banner from "../components/banner/index_banner";
import BannerAbout from "../assets/banner-about.jpg";
import Collapse from "../components/collapse/index_collapse";
import aboutContent from "../data/about-content";

function About() {
  return (
    <>
      <Banner image={BannerAbout} text="" className="banner-about" />
      {aboutContent.map((item) => (
        <Collapse key={item.title} title={item.title}>
          <p>{item.content}</p>
        </Collapse>
      ))}
    </>
  );
}

export default About;
