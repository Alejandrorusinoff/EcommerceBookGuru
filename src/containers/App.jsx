import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import userPersisterHook from "../hooks/userPersisterHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Componentes
import NavBarContainer from "./NavBarContainer";
import RegisterContainer from "./RegisterContainer";
import FooterContainer from "./FooterContainer";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";
import LoginContainer from "./LoginContainer";
import BooksContainer from "./BooksContainer";
import CartContainer from "./CartContainer";
import SingleBookContainer from "./SingleBookContainer";
import PreviousContainer from "./PreviousContainer";
import CategoriesContainer from "./CategoriesContainer";
import UsersContainer from "./UsersContainer";
import HistoryContainer from "./HistoryContainer";
import ContactContainer from "./ContactContainer";
import AboutContainer from "./AboutContainer";
import SingleUserContainer from "./SingleUserContainer";
import BooksEditContainer from "./BooksEditContainer";
import SearchContainer from "./SearchContainer";
import AddBookContainer from "./AddBookContainer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userPersisterHook()));
  }, [dispatch]);

  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route exact path="/">
          <Carousel1 />
          <Carousel2 />
        </Route>
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/books" render={() => <BooksContainer />} />
        <Route
          exact
          path="/search/:search"
          render={() => <SearchContainer />}
        />
        <Route
          path="/books/:bookId"
          render={({ match }) => (
            <SingleBookContainer bookId={match.params.bookId} />
          )}
        />
        <Route exact path="/postnewbook" render={() => <AddBookContainer />} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/previous" component={PreviousContainer} />
        <Route
          path="/category/:category"
          render={({ match }) => (
            <CategoriesContainer typeCategory={match.params.category} />
          )}
        />
        <Route exact path="/history" component={HistoryContainer} />
        <Route exact path="/contact" component={ContactContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/edit" component={BooksEditContainer} />
        <Route exact path="/users" component={UsersContainer} />
        <Route
          exact
          path="/users/:id"
          render={({ match }) => (
            <SingleUserContainer userId={match.params.id} />
          )}
        />
      </Switch>
      <br />
      <FooterContainer />
      <ToastContainer />
    </div>
  );
};

export default App;
