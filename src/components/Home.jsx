import React from "react";
import { Product } from "./Product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg1.jpeg" className="card-img" alt="background" height="550px" />
        <div className="card-img-overlay d-flex flex-column ">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">All Season Product's</h5>
          <p className="card-text lead fs-2 ">
           CHECK OUT ALL THE STUFF.
          </p>
         
            </div>
          
        </div>
      </div>
      <Product/>
    </div>
    
  );
};

export default Home;
