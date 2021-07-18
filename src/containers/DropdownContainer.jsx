import React from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBooksByCategory } from "../axiosRequests/booksRequests";
import { setCategory } from "../store/category";
import "../styles/Categories.css";

const Dropdown = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const selectCategory = (category) => {
    getBooksByCategory(category).then(({ data }) => {
      dispatch(setCategory(data));
    });
  };

  const categorias = [
    "Biography",
    "Business & Money ",
    "Kids",
    "Classic Literature & Fiction",
    "Comics & Graphic Novels",
    "Cooking",
    "Crime, Thriller, Mystery",
    "Science Fiction & Fantasy",
    "Science",
    "Self-Help",
  ];

  return (
    <div>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="" className="drop-color">
          Categories
        </DropdownToggle>
        <DropdownMenu className="categories">
          {categorias.map((categoria, index) => (
            <DropdownItem
              key={index}
              onClick={() => selectCategory(categoria)}
              className="drop-color"
            >
              <Link className="categories" to={`/category/${categoria}`}>
                {categoria}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
};

export default Dropdown;
