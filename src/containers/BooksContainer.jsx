import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../store/books';
import Books from '../components/Books';
import { getRandomBooks } from "../axiosRequests/booksRequests";
import { addOrderAxios } from '../axiosRequests/ordersRequests';
import "../styles/Books.css";
import 'react-toastify/dist/ReactToastify.css';

const BooksContainer = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { books, user } = useSelector(state => state);

    useEffect(() => {
        getRandomBooks()
        .then(({ data }) => dispatch(setBooks(data)));
    }, [dispatch]);

    const addOrder = (bookId) => {
        user.id ? addOrderAxios(bookId, user.id) : history.push("/register")
    };
    
    return(
        <Books books={books} addOrder={addOrder} />
    )
};

export default BooksContainer;