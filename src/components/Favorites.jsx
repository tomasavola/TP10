import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          Favorites
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          YOUR FAVOURITE ITEMS
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {favorites.length > 0 ? (
            favorites.map((data, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 600}
                className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
              >
                <img src={data.imagenes} alt="..." className="mx-auto" />
                <h6 className="my-3">{data.titulo}</h6>
                <p className="leading-7">{data.descripcion}</p>
              </div>
            ))
          ) : (
            <>
              <div className="min-w-[14rem]"></div>
              <div className="min-w-[14rem]"></div>
              <div
                className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
              >
                <h6 className="my-3">No favorites yet</h6>
                <p className="leading-7">Start adding your favorite items!</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
