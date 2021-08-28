import React from "react";
import "../login.css";
import ReactDom from "react-dom";

export default function LoginPopup({ isOpen, close }) {
  const [isLogin, setLogin] = React.useState(false);
  if (!isOpen) return null;
  

  const loginStyle={
            transform: isLogin?"translateX(100%)":"translateX(0%)",
            opacity:"1",
            zIndex:"5",
            animation: "show 0.6s"
  }

  function toggleLogin(){
    setLogin(true);
  }
  
  return ReactDom.createPortal(
    <>
    {/* const handleClick = ()=>{
      const signUpButton= document.getElementById('signUp');
        const signInButton= document.getElementById('signIn');
        const Registercontainer= document.getElementById('Register-container');

        signUpButton.addEventListener('click',() =>{
            Registercontainer.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click',() =>{
            Registercontainer.classList.remove("right-panel-active");
        });
    } */}

      <div className="overlay">
        <div className="reg">
          <button onClick={close}>X</button>


          <div className="Register-container form" style={isLogin ? {loginStyle} : null}>


          <div className="form-container sign-up-container" >
  
                <h1>Create Account</h1>
                <input type="text" name="name" placeholder="Enter Name" required />
                <input type="email" name="email" placeholder="Enter Email" required />
                <input type="password" name="password" placeholder="Enter Password" required />
                <input type="password" name="password" placeholder="Re-enter Password" required />
              <button className="styled" >Sign Up</button>
                <h5>OR</h5>
                <button className="styled">Sign Up with Google</button>

        </div>


        <div className="form-container sign-in-container">
                <h1>Sign In</h1>
                <input type="email" name="email" placeholder="Enter Email" required />
                <input type="password" name="password" placeholder="Enter Password" required />
                <button className="styled">Login</button>
                <h5>OR</h5>
                <button className="styled"> Sign Up with Google</button>
        </div>


        <div className="overlay-container">
            <div className="overlay-form">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="styled styled-ghost" id="signUp">Sign Up</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello!</h1>
                    <p>Enter your details and start journey with us</p>
                    <button className="styled styled-ghost" id="signIn" onClick={toggleLogin}>Sign In</button>
                </div>
            </div>
        </div>

        </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
