import React from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.user);
  const {getUserById} = useAction();
  return (
      <div style={{ margin: 10 }}>
    <button  style={{marginBottom:10}} onClick={() => getUserById(1)}>Get user</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.massage}</div>
      ) : user?.name ? (
        <h1>User:{user.name}</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
  debugger
};

export default User;
