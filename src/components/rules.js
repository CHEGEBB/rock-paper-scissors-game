import React from "react";
import "../sass/rules.scss";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";
import Rock from "../images/icon-rock.svg";
import ArrowLeft from "../images/pajamas--arrow-left.svg";
import Rightarrow from "../images/pajamas--long-arrow.svg";
import { useState } from "react";
import close from '../images/gg--close.svg';
const Rules = () => {
const [isVisible,setIsVisible] =useState(true);

const handleClose= () =>{
  setIsVisible(false);
}

  return (
    <div className="Rules-container">
    {isVisible && (
      <div className="rules">
      <div className="top">
        <div className="name">
        <h1>Rules</h1>
        </div>
        <span className="close-button" onClick={handleClose}>
            <img src ={close} alt="Close" />
          </span>
      </div>
       
        <div className="rules-content">
          <div className="row1">
          <div className="rule1">
            <div className="paper-rule">
              <div className="hand">
                <img src={Paper} alt="paper" />
              </div>
            </div>
            <div className="arrow-left">
            <p className="beats-text">Beats</p>
                <img src={ArrowLeft} alt="paper" />
              </div>
              </div>
              <div className="rule2">
            <div className="scissors-rule">
              <div className="scissor">
                <img src={Scissors} alt="paper" />
              </div>
            </div>
            <div className="right-side-arrow">
            <p className="beat-text">Beats</p>
              <img src={ArrowLeft} alt="paper" />
            </div>
            </div>
          </div>

          <div className="row2">
          <div className="left-side-arrow">
          <p className="beat2-text">Beats</p>
              <img src={Rightarrow} alt="paper" />
            </div>
            <div className="rock-content">
              <div className="rock-rule">
                <img src={Rock} alt="paper" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Rules;
