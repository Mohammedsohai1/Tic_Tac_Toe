import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import { toast } from "react-toastify";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);
  const showToast = () => {
    toast("Invite Link Copied", {
      position: "top-right",
      autoClose: 1,
      closeButton: false,
      style: {
        backgroundColor: "#001f3f", // Dark blue background color
        color: "#cd8d16",
        fontWeight:'Bold', // White text color
        height: "50px", // Set the height
        width: "250px", // Set the width
        padding: "16px", // Optional: Add padding for better appearance
        position: "fixed",
        textAlign:"center", // Make the toast "float" on top
        top: "20px", // Adjust the top position as needed
        right: "0px", // Adjust the right position as needed
        paddingBottom:'5px',
        borderRadius:'10px',

      },
    });
  };
  
  
  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg"> Pick player </h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light text-normal"></p>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow" onClick={() => handleStart("cpu")}>
          new game (vs CPU)
        </button>
        <button className="btn btn-blue" onClick={() => handleStart("user")}>
          {" "}
          new game (vs Player)
        </button>
        <button className="btn btn-yellow btn-yellowsmall" onClick={showToast}>
           Invite Your friend 
        </button>
      </div>
    </div>
  );
};

export default Start;
