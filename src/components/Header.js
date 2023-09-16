import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
function Header() {
  return (
    <header>
        <h1>Ganga Museum</h1>
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
      </header>
  );
}

export default Header;
