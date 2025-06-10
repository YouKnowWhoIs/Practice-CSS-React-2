import { useState } from "react";
import "../../style/myForm/myForm.css";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPass, setSubmittedPass] = useState("");

  const handleName = (e) => {
    setName(e.target.value);

    if (errorName) setErrorName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (errorEmail) setErrorEmail(false);
  };

  const handlePass = (e) => {
    setPass(e.target.value);

    if (errorPass) setErrorPass(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const isNameVolid = name.trim().length > 2;
    const isEmailVolid = email.trim() && email.includes(".");
    const isPassVolid = pass.trim().length > 7;

    if (!isNameVolid) {
      setErrorName(true);
      setSuccessful(false);
      return;
    }

    if (!isEmailVolid) {
      setErrorEmail(true);
      setSuccessful(false);
      return;
    }

    if (!isPassVolid) {
      setErrorPass(true);
      setSuccessful(false);
      return;
    }

    setErrorName(false);
    setErrorEmail(false);
    setErrorPass(false);
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedPass(pass);
    setSuccessful(true);
    setName("");
    setEmail("");
    setPass("");
  };

  return (
    <div className="conteinerForm">
      <form className="myForm" onSubmit={handleSubmitForm}>
        <input
          onChange={handleName}
          className="name"
          value={name}
          type="text"
          placeholder="Ім'я"
        />
        {errorName && <p className="errorText">Ім'я обовязкове!</p>}
        <input
          onChange={handleEmail}
          className="email"
          value={email}
          type="email"
          placeholder="Пошта"
        />
        {errorEmail && <p className="errorText">Пошта обовязкове!</p>}

        <input
          onChange={handlePass}
          className="pass"
          value={pass}
          type="password"
          placeholder="Пароль"
        />
        {errorPass && (
          <p className="errorText">Пароль повинен бути не меньше 8 симболів</p>
        )}

        <button type="submit">Продовжити</button>

        {successful && (
          <div className="successfulyText">
            <h3>Успiшно!</h3>
            <p>Ім'я: {submittedName}</p>
            <p>Пошта: {submittedEmail}</p>
            <p>Пароль: {submittedPass}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default MyForm;
