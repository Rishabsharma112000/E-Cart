import React, { useState } from 'react'

export const Register = () => {
    const [user, setUser] = useState({
        name:"",
        mobile:"",
        email: "",
        password: "",
        repass : ""
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
        <label htmlFor="name" className=" form-label  ">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          onChange={changeControl}
        />
        
      </div>
      <div className="mb-3 ">
        <label htmlFor="name" className=" form-label  ">
         Mobile No
        </label>
        <input
          type="Number"
          name="mobile"
          className="form-control"
          id="mobile"
          onChange={changeControl}
        />
        
      </div>
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
      <div className="mb-3 ">
        <label htmlFor="name" className=" form-label  ">
          Re-Password
        </label>
        <input
          type="text"
          name="repass"
          className="form-control"
          id="repass"
          onChange={changeControl}
        />
        
      </div>
     
      <button type="submit" className="btn btn-primary col-md-4 ">
       Register
      </button>
    </form>
  </div>

  )
}
