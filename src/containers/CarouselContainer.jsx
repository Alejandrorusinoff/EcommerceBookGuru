// import React, { useEffect } from "react";
// import {getRandomBooks} from "../axiosRequests/booksRequests";
// import CarouselComp from "../components/CarouselComp";
// import "../styles/Carousel.css";

// const CarouselContainer = () => {
//   const [rndBooks, setRndBooks] = React.useState([]);

//   useEffect(() => {
//     getRandomBooks().then(({ data }) => setRndBooks(data));
//   }, []);

//   return <CarouselComp books={rndBooks.slice(0, rndBooks.length / 2)} />;
// };

// export default CarouselContainer;
