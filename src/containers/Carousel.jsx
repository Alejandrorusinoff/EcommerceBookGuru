import React, { useEffect } from "react";
import { getRandomBooks } from "../axiosRequests/booksRequests";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

const Carousel1 = () => {
  const [rndBooks, setRndBooks] = React.useState([]);

  useEffect(() => {
    getRandomBooks().then(({ data }) => setRndBooks(data));
  }, []);

  return (
    <div className="car">
      <div>
        <h6>Latest Releases</h6>
        Discover the very latest titles from the worlds of fiction, non-fiction
        and children’s. These great volumes are all out now.
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

export default Carousel1;
