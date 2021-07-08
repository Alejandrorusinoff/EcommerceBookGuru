import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesComp from "../components/CategoriesComp";
import { setTypeCategory } from "../store/stateCategory";
import "../styles/Category.css";

const CategoriesContainer = ({ typeCategory }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTypeCategory(typeCategory));
  }, [typeCategory, dispatch]);

  return (
    <div>
      <CategoriesComp />
    </div>
  );
};

export default CategoriesContainer;
