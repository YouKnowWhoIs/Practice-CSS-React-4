import { useState } from "react";
import "../../style/validate/validate.css";

function Validate() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorLoginText, setErrorLoginText] = useState("");
  const [errorEmailText, setErrorEmailText] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [successfulText, setSuccessfulText] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyForm = (e) => {
    e.preventDefault();

    let hasError = false;

    if (login.trim() === "") {
      setErrorLogin(true);
      setErrorLoginText("Поле логіну пусте!");
      hasError = true;
    } else if (login.length < 5) {
      setErrorLogin(true);
      setErrorLoginText("Логiн повинен містити не меньше 5 літер!");
      hasError = true;
    } else {
      setErrorLogin(false);
      setErrorLoginText("");
    }

    if (email.trim() === "") {
      setErrorEmail(true);
      setErrorEmailText("Поле емайлу пусте!");
      hasError = true;
    } else if (!emailPattern.test(email)) {
      setErrorEmail(true);
      setErrorEmailText("Емайл не валiдний!");
      hasError = true;
    } else {
      setErrorEmail(false);
      setErrorEmailText("");
    }

    if (hasError) return;

    setSuccessfulText("Логін та емейл добрі!");

    setSuccessful(true);
    setErrorLogin(false);
    setErrorEmail(false);
    setErrorLoginText("");
    setErrorEmailText("");
  };

  const handleReset = () => {
    setErrorLogin(false);
    setErrorEmail(false);
    setSuccessful(false);
    setErrorLoginText("");
    setErrorEmailText("");
    setSuccessfulText("");
    setLogin("");
    setEmail("");
  };

  return (
    <>
      <div id="validate">
        <form className="form" onSubmit={handleVerifyForm}>
          <input
            type="text"
            placeholder="веди логін"
            onChange={handleLogin}
            value={login}
          />
          {errorLogin && <p className="errorValid">{errorLoginText}</p>}

          <input
            type="email"
            placeholder="Веди емейл"
            onChange={handleEmail}
            value={email}
          />
          {errorEmail && <p className="errorValid">{errorEmailText}</p>}

          <div className="conteinerValidBtn">
            <button type="submit">Перевірити</button>
            <button type="button" onClick={handleReset}>
              Очистити
            </button>
          </div>
          {successful && <p className="successful">{successfulText}</p>}
        </form>
      </div>
    </>
  );
}

export default Validate;
