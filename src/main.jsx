import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FloatingQuote from "./api/FloatingQuote"
import { GameState } from "./context/GameContex";
import { ToastContainer} from 'react-toastify';

import { ModalState } from "./context/ModalContext";
// import {FloatingQuote} from "./api/FloatingQuote"

ReactDOM.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
        <App />
        <FloatingQuote/>
        <ToastContainer/>
        
      </GameState>
    </ModalState>
  </React.StrictMode>,
  document.getElementById("root")
);
