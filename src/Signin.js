import React, { useState } from "react";
import "./SigninStyle.css";
import "./Style.css";



const SignIn = () =>{
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const formInputs = [
        {
          name: "email",
          label: "E-mail",
          type: "email",
          id: "email"
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          id: "paossword"
        },
      ];

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

    return (
        <>
        <div className="blank-div"></div>

        <div className="signin-container">
            <h2 id="signin-title">Sign in</h2>
        <br/>
        <form method="post" onSubmit={handleSubmit}>
          {formInputs.map((input) => (
            <label key={input.id}>
              {input.label}
              <br />
              {(
                <input
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  className="signin-input"
                  value={formData[input.name]}
                  onChange={handleInputChange}
                />
              )}
            </label>
          ))}
        <br />
        <button className="button-signin" id="signin-button">Sign in</button>
        </form>
        <br/>
        <div className="forget-signup-links">
            <a id="forget-password-link">Forgot Password</a>
                <br/>
            <p>New to Alo Moves? <a id="signup-link">Sign Up</a></p>
        </div>
        <hr className="hr-text" data-content="Ou bien s'inscrire" />
        <button className="button-signin" ><i className="fa fa-google"></i>S'inscrire avec compte google</button>
    </div>
  </>
 );
}

export default SignIn;
