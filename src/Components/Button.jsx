import React from "react";
import styled from "styled-components";

const Button = ({ label, onClick, className }) => {
  return (
    <BUTTON className={className} onClick={onClick}>
      {label}
    </BUTTON>
  );
};

export default Button;


const BUTTON=styled.button`
    color: white;
    border-radius: 20px;
    background-color: green;
    width: 100px;
    height: 50px;
    border: none;
`