"use client";
import React, { useState } from "react";
import { logIn, logOut, toggleGodMode } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Authenticate = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogIn = () => {
    if (userName !== "") dispatch(logIn(userName));
    else alert("You need to login first!!");
  };
  const onClickLogOut = () => {
    dispatch(logOut());
  };
  const onClickToggleGodMode = () => {
    if (userName !== "") dispatch(toggleGodMode());
    else alert("You need to login first!!");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onClickLogIn();
          }
        }}
        placeholder="Enter your username"
        className="p-2 rounded-lg text-black"
        required
      />
      <div className="flex justify-between pt-10">
        <button type="button" onClick={onClickLogIn} className="btn">
          LogIn
        </button>
        <button type="button" onClick={onClickLogOut} className="btn">
          LogOut
        </button>
      </div>
      <button
        type="button"
        onClick={onClickToggleGodMode}
        className="btn mt-5 ml-10"
      >
        Toggle GodMode
      </button>
    </div>
  );
};

export default Authenticate;
