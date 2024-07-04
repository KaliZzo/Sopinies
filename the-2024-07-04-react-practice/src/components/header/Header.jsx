import React, { useContext } from 'react';
import changeTitleContext from "../../contexts/siblingContext"

import './Header.css';

export default function Header() {
  const { text } = useContext(changeTitleContext);
  return (


    
    <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">
                HaHaHomeschooling
            </span>
            <span className="site-heading-lower">
                Let Kids <span id="whatKidsDo">{text}</span> Here
            </span>
        </h1>
    </header>
  )
}
