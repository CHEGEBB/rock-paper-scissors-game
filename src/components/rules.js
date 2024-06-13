import React from "react";
import "../sass/rules.scss";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";
import Rock from "../images/icon-rock.svg";
import ArrowLeft from "../images/pajamas--arrow-left.svg";
import Rightarrow from "../images/pajamas--long-arrow.svg";

const Rules = () => {
  return (
    <div className="Rules-container">
      <div className="rules">
        <h1>Rules</h1>
        <div className="rules-content">
          <div className="row1">
          <div className="rule1">
            <div className="paper">
              <div className="hand">
                <img src={Paper} alt="paper" />
              </div>
            </div>
            <div className="arrow-left">
                <img src={ArrowLeft} alt="paper" />
              </div>
              </div>
              <div className="rule2">
            <div className="scissors">
              <div className="scissor">
                <img src={Scissors} alt="paper" />
              </div>
            </div>
            <div className="right-side-arrow">
              <img src={ArrowLeft} alt="paper" />
            </div>
            </div>
          </div>

          <div className="row2">
          <div className="left-side-arrow">
              <img src={Rightarrow} alt="paper" />
            </div>
            <div className="rock-content">
              <div className="rock">
                <img src={Rock} alt="paper" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
