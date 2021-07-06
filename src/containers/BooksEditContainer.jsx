import React from "react";
import "../styles/SingleBook.css";
import { useState } from "react";
import BooksEdit from "../components/BooksEdit";
import { useHistory } from "react-router-dom";
import { updateSingleBook } from "../methods/axiosRequests";

const BooksEditContainer = () => {
  const [movieUpdatedProps, setMovieUpdatedProps] = useState({});
  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault()
    let key = e.target.name;
    let value = e.target.value;
    setMovieUpdatedProps({ ...movieUpdatedProps, [key]: value });
  };

  function submitHandler(e, bookId) {
    e.preventDefault()
    updateSingleBook(bookId, movieUpdatedProps)
      .then((res) => {
        console.log(res.data[0]);
        if (res.data) history.push(`/books/${bookId}`);
      })
      .catch((err) => console.log(err));
  }

  const moviePropsArray = [
    "author",
    "category",
    "publisher",
    "rating",
    "price",
  ];

  return (
    <BooksEdit
      moviePropsArray={moviePropsArray}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default BooksEditContainer;