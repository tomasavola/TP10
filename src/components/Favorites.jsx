import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h2 className="title" data-aos="fade-down">
            Favorites
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            Your Favorite Items
          </h4>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="flex gap-5 justify-between flex-wrap group">
        {favorites.length !== 0 ? (
          favorites.map((data, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 600}>
              <h3>{data.titulo}</h3>
            </div>
          ))
        ) : (
          <h3>There are no favorites yet</h3>
        )}
      </div>
    </Container>
  );
};

export default Favorites;