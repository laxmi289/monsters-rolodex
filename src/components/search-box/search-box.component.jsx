import React from "react";
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search"
        type='search' 
        placeholder={ placeholder }     //During reusability, if we want placeholder to be dynamic, we destructure it as in line 4 snd pass it in placeholder
        onChange={ handleChange }       //Same as above
    />     
)