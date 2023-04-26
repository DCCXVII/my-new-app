import { useState } from "react";
import "./SignupStyle.css";
import "./Style.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const[lowerValidated, setlowerValidated] = useState(false);
  const[upperValidated, setuppertValidated] = useState(false);
  const[numberValidated,setnumberValidated] = useState(false);
  const[lengthValidated, setlengthValidated] = useState(false);
  
  function checkPassword(password) {
  const lengthRegex = /.{8,}/;
  const upperRegex = /[A-Z]/;
  const lowerRegex = /[a-z]/;
  const numberRegex = /\d/;
  const lengthValidated = lengthRegex.test(password);
  const upperValidated = upperRegex.test(password);
  const lowerValidated = lowerRegex.test(password);
  const numberValidated = numberRegex.test(password);

  return {
    lengthValidated,
    upperValidated,
    lowerValidated,
    numberValidated,
  };
}

  const formInputs = [
    {
      name: "nom",
      label: "Nom",
      type: "text",
      id: "nom",
    },
    {
      name: "prenom",
      label: "Prenom",
      type: "text",
      id: "prenom",
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      id: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      id: "password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add code to submit form data here
  }; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // check password validations
    if (name === "password") {
      const {
        lengthValidated,
        upperValidated,
        lowerValidated,
        numberValidated,
      } = checkPassword(value);
      setlengthValidated(lengthValidated);
      setuppertValidated(upperValidated);
      setlowerValidated(lowerValidated);
      setnumberValidated(numberValidated);
    }
  };

  const handleFocus = () => {
    const checkPasswordDiv = document.querySelector(".check-password");
    if (checkPasswordDiv) {
      checkPasswordDiv.style.maxHeight = "100px";
    }
  };

  const handleBlur = () => {
    const checkPasswordDiv = document.querySelector(".check-password");
    if (checkPasswordDiv) {
      checkPasswordDiv.style.maxHeight = "0";
    }
  };

  const getPasswordValidationClass = (condition) => {
    return condition ? "fa fa-check-circle" : "fa fa-check-circle-o";
  };

  return (
    <>
      <div className="blank-div"></div>
      <div className="signup-container">
        <span id="step-chart"></span>
        <h3 id="signup-steps">étapes 1 sur 3</h3>
        <br />
        <h2 id="signup-title">S'INSCRIRE</h2>
        <br />
        <p id="description-1">
          Il suffit de <span>3 étapes</span> pour démarrer votre essai gratuit. Inscrivez-vous
          avec votre compte social ou créez un compte avec nous.
        </p>
        <br />
        <button className="button" id="signup-google-button">
          <i className="fa fa-google"></i> S'inscrire avec compte google
        </button>
        <br />
        <hr className="hr-text" data-content="OU CRÉER UN COMPTE" />
        <br />
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
                  className="signup-input"
                  value={formData[input.name]}
                  onChange={handleInputChange}
                  onFocus={input.name === "password" ? handleFocus : null}
                  onBlur={input.name === "password" ? handleBlur : null}
                />
              )}
            </label>
          ))}
          <div className="check-password">
            <div>
              <i
                className={getPasswordValidationClass(lengthValidated)}
              ></i>{" "}
              8 characters minimum
            </div>
            <div>
              <i
                className={getPasswordValidationClass(upperValidated)}
              ></i>{" "}
              Au moins une lettre majuscule
            </div>
            <div>
              <i
                className={getPasswordValidationClass(lowerValidated)}
              ></i>{" "}
              Au moins une lettre minuscule
            </div>
            <div>
              <i
                className={getPasswordValidationClass(numberValidated)}
              ></i>{" "}
              Au moins un chiffre
            </div>
          </div>
          <button className="button" type="submit" id="signup-submit-button">
            S'INSCRIRE
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;

