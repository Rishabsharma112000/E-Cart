import React, { useState } from "react";

export const Login =()=> {

  
        const [user, setUser] = useState({
          email: "",
          password: "",
        });

    const changeControl = (event) => {
        const { name, value } = event.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
      console.log("User", user);
  return (
    <div className="container px-4 my-5  py-5 col-md-4" >
      <form className="login-form">
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className=" form-label  ">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={changeControl}
            aria-describedby="emailHelp"
            placeholder="indian@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
           name="password"
            type="password"
            onChange={changeControl}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
       
        <button type="submit" className="btn btn-primary col-md-4 ">
          Login
        </button>
      </form>
    </div>
  );
}

