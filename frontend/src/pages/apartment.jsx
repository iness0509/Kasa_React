import { useParams } from "react-router-dom";
import apartments from "../data/apartments.json";
import Slider from "../components/slider/index_slider";
import Tag from "../components/tag/index_tag";
import "./apartment.css";


function Apartment() {
  const { id } = useParams();
  const apartment = apartments.find((item) => item.id === id);

  if (!apartment) {
    return <p>Logement introuvable</p>;
  }

  return (
    <>
      <main className="apartment-container">
        <Slider pictures={apartment.pictures} />
        <section className="apartment-header">
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>
          <Tag tags={apartment.tags} />
        </section>
        <section className="apartment-aside"></section>
        {/*<Host/>*/}
        {/*<Rating/>*/}
        <section className="aparatment-details"></section>
        {/*<collapse/>*/}
      </main>
    </>
  );
}

export default Apartment;
