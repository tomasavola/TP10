import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DataPortfolioContext } from "../context/DataPorfolioContext";
import { FavoritosContext } from "../context/FavoritosContext";
import './estilo.css';



export default function ProjectDetail() {
  let { dataPortfolio } = useContext(DataPortfolioContext);
  let { favorites, addCreation, deleteCreation } = useContext(FavoritosContext);
  const { id } = useParams();
  const [creation, setCreation] = useState(null);

  useEffect(() => {
    const project = dataPortfolio.filter((elemento) => elemento.id == id);

    if (project.length > 0) setCreation(project[0]);
  }, [dataPortfolio, id]);

  if (creation) {
    return (
      <>
        <Link to="/" className="back-link">
        Go back
        </Link>
        <section className="bg-bg_light_primary">
          <div className="md:container px-5 pt-14">
            <h2 className="title" data-aos="fade-down">
              Detalle creación
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              {creation.titulo}
            </h4>
            <br />
            <div className="flex items-center md:flex-row flex-col-reverse ">
              <img
                src="../assets/images/Hireme/dedo.png"
                alt="..."
                data-aos="fade-right"
                className="max-w-sm md:block hidden"
              />
              <img
                src={creation.imagenes}
                data-aos="fade-up"
                alt="..."
                className="max-w-sm md:hidden"
              />
              <div
                data-aos="fade-left"
                className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
              >
                <p className="leading-7">{creation.descripcion}</p>
                <br />
                <button className="btn bg-dark_primary text-white">
                  ADD TO FAVORITES
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <>holaaaa</>;
  }
}
