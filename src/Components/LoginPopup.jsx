import React from "react";
import "../login.css";
import ReactDom from "react-dom";

export default function LoginPopup({ isOpen, close }) {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
          <button onClick={close}>X</button>
          <h1>Hello Deb Piro CSS ka kamal Dikha Do ab</h1>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
