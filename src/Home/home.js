import React from "react";
import "./home.css";
import image1 from "../../src/images/bg.jpg";

export default function Home() {
  return (
    <div className="home">
      <section className="banner">
       <img src={image1} alt="background"/>
        <h1 className="heading">Basic template</h1>

        <div className="info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>

          <div id="myModal" className="modal">
            <div className="modal-content">
              <span id="c" className="close">
                &times;
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type
              </p>
            </div>
          </div>
          <button id="b" type="button">
            Read more
          </button>
        </div>
      </section>
    </div>
  );
}
