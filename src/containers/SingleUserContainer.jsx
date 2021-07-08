import React, { useState, useEffect } from "react";
import SingleUser from "../components/SingleUser";
import { getSingleUser } from "../axiosRequests/usersRequests";

const SingleUserContainer = ({ userId }) => {
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    getSingleUser(userId).then(({ data }) => setSingleUser(data));
  }, [userId]);

  return <SingleUser singleUser={singleUser} />;
};

export default SingleUserContainer;
