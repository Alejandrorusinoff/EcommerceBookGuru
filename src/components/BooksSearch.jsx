import React from "react";
import { Link } from "react-router-dom";
import "../styles/Books.css";

const Books = ({ books, addOrder }) => {
  return (
    <div className="books">
      {books.length ?
        books.map((book) => {
          return (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <img src={book.img} alt="" />
              </Link>
              <div className="tamaño">{book.title.slice(0, 21)}</div>
              <div>Price: {book.price} U$D</div>
              <div>
                <button
                  onClick={() => addOrder(book.id)}
                  className="addToOrderbutton"
                >
                  Add to cart
                </button>
              </div>
              <br />
            </div>
          );
        }) : 
        <div className="noResults"><h1>No results</h1></div>
        }
    </div>
  );
};

export default Books;