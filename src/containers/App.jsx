import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user";
import userPersisterHook from "../hooks/userPersisterHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Componentes
import NavBar from "./NavBar";
import Register from "./Register";
import FooterContainer from "./FooterContainer";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";
import LogIn from "./LogIn";
import BooksContainer from "./BooksContainer";
import Cart from "./Cart";
import SingleBookContainer from "./SingleBookContainer";
import Previous from "./Previous";
import Category from "./Category";
import UsersContainer from "./UsersContainer";
import History from "./History";
import Contact from "./Contact";
import About from "./About";
import SingleUserContainer from "./SingleUserContainer";
import BooksEditContainer from "./BooksEditContainer";
import SearchContainer from "./SearchContainer";
import AddBookContainer from "./AddBookContainer";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userPersisterHook()));
  }, [dispatch]);

  const input = useSelector((state) => state.input)
  const { books } = useSelector(state => state);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Carousel1 />
          <Carousel2 />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/books" render={() => <BooksContainer />} />
        <Route
          exact
          path="/search/:search"
          render={() => <SearchContainer/>}
        /> 
        <Route path="/books/:bookId" 
        render={({match})=> 
        <SingleBookContainer bookId={match.params.bookId} />}/>
        <Route exact path="/postnewbook" render={() => <AddBookContainer />} />     
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/previous" component={Previous} />
        <Route
          path="/category/:category"
          render={({ match }) => (
            <Category typeCategory={match.params.category} />
          )}
        />    
        <Route exact path="/history" component={History} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
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
