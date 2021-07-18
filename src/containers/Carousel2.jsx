import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";
import axios from "axios";

const Carousel2 = () => {
  const [rndBooks, setRndBooks] = React.useState([]);

  useEffect(() => {
    axios
      .get("/api/books/home")
      .then((res) => res.data)
      .then((randBooks) => setRndBooks(randBooks));
  }, []);

  return (
    // <div className="carousel2">
    <div className="car">
      <div>
        <h6>Best Sellers</h6>
        Discover our bestselling books and see what's trending worldwide.
        <Carousel>
          <Carousel.Item>
            <div className="slideImagediv">
              {rndBooks &&
                rndBooks.map((book, index) => {
                  return index < 8 ? (
                    <img src={book.img} alt="..." key={book.id} />
                  ) : null;
                })}
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="slideImagediv">
              {rndBooks &&
                rndBooks.map((book, index) => {
                  return index > 7 && index < 16 ? (
                    <img src={book.img} alt="..." key={book.id} />
                  ) : null;
                })}
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="slideImagediv">
              {rndBooks &&
                rndBooks.map((book, index) => {
                  return index > 15 && index < 23 ? (
                    <img src={book.img} alt="..." key={book.id} />
                  ) : null;
                })}
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel2;
