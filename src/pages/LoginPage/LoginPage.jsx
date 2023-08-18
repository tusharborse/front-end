import React, { useState } from 'react'
import "./LoginPage.scss"
import axios from 'axios';

const InputItem = ({ label, inputType, state, setState }) => {


  return (
    <div className='LoginPage-maincontainer__formcontainer__inputrow'>
      <div className='LoginPage-maincontainer__formcontainer__inputrow__label'>{label} :</div>
      <input className='LoginPage-maincontainer__formcontainer__inputrow__input' type={inputType}
        value={state}
        onChange={(e) => {
          // console.log(label,"=", e.target.value);
          setState(e.target.value);
        }} />
    </div>
  );
}


const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginClick = () => {
    if (userPassword !== confirmPassword && userPassword.length > 6) {
      window.alert("password mismatch")
    }
    else {
      if (userEmail !== "" && userName !== "") {
        axios("http://localhost:5000/user/register", {
          method: "POST",
          data: {
            username: userName,
            useremail: userEmail,
            password: userPassword,
            confirmPassword:confirmPassword
          }
        }).then((resp) => {
          console.log(resp.data)
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  }

  return (
    <div className='LoginPage-maincontainer'>
      <div className='LoginPage-maincontainer__formcontainer'>
        {/* <div className='LoginPage-maincontainer__formcontainer__inputrow'>
          <div className='LoginPage-maincontainer__formcontainer__inputrow__label'>User Name :</div>
          <input className='LoginPage-maincontainer__formcontainer__inputrow__input' type='text'
            value={userName}
            onChange={(e) => {
              console.log("userName =", e.target.value);
              setUserName(e.target.value);
            }} />
        </div>
        <div className='LoginPage-maincontainer__formcontainer__inputrow'>
          <div className='LoginPage-maincontainer__formcontainer__inputrow__label'>User Email :</div>
          <input className='LoginPage-maincontainer__formcontainer__inputrow__input' type='email'
            value={userEmail}
            onChange={(e) => {
              console.log("userEmail =", e.target.value);
              setUserEmail(e.target.value);
            }} />
        </div>
        <div className='LoginPage-maincontainer__formcontainer__inputrow'>
          <div className='LoginPage-maincontainer__formcontainer__inputrow__label'>Password :</div>
          <input className='LoginPage-maincontainer__formcontainer__inputrow__input' type='password'
            value={userPassword}
            onChange={(e) => {
              console.log("userPassword =", e.target.value);
              setUserPassword(e.target.value);
            }} />
        </div>
        <div className='LoginPage-maincontainer__formcontainer__inputrow'>
          <div className='LoginPage-maincontainer__formcontainer__inputrow__label'>Confirm Password :</div>
          <input className='LoginPage-maincontainer__formcontainer__inputrow__input' type='password'
            value={confirmPassword}
            onChange={(e) => {
              console.log("confirmPassword =", e.target.value);
              setConfirmPassword(e.target.value);
            }} />
        </div> */}
        <InputItem label={"User Name"} inputType={"text"} state={userName} setState={setUserName} />
        <InputItem label={"User Email"} inputType={"email"} state={userEmail} setState={setUserEmail} />
        <InputItem label={"User Password"} inputType={"password"} state={userPassword} setState={setUserPassword} />
        <InputItem label={"Confirm Password"} inputType={"password"} state={confirmPassword} setState={setConfirmPassword} />
        <button className='LoginPage-maincontainer__formcontainer__loginBtn'
         onClick={handleLoginClick}>Login</button>
      </div>

    </div>
  )
}

export default LoginPage
