import React from 'react';
import "./screenshot.scss";
import screenshot from "../../src/images/images.jpg";

export default function Screenshot() {
  return (
    <div className='screenshotPage'>
      <h3>Screenshot</h3>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type</p>
        <img src={screenshot} />
        <button>DOWNLOAD NOW</button>
    </div>
  )
}
