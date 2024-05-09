import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import your CSS file

import {
  Card,
  Button,
} from "../styled/styled";

const progressBarStyles = {
  myProgress: {
    width: '100%',
    backgroundColor: '#fbbf24',
  },
  myBar: {
    width: '100%',
    height: '10px',
    backgroundColor: '#fbbf24',
  },
};

export function Frontend(){
  let maxTaps = 10;
  const [tapsMade, setTapsMade] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(100);

  let remainingTaps = 0//= maxTaps - tapsMade;

  //increament by 10% every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (width === 0) {
        if (tapsMade < maxTaps) {
          setTapsMade(tapsMade + 1);
          
        }
        setWidth(width + (100 / maxTaps));
        remainingTaps++
      } else {
        if(width == 100){
          return
        }else{
          setWidth(width + (100 / maxTaps));
          
        }
      }
      remainingTaps++
    }, 1000);
    return () => clearInterval(timer);
  }, [width, tapsMade, remainingTaps]);

  const incrementWidth = () => {
    if(width <= 0){
      return;
    }else{
      const newWidth = width - (100 / maxTaps);
      setWidth(Math.min(newWidth, 100));
      setTapsMade(tapsMade + 1);
    }
  };

  remainingTaps = maxTaps - tapsMade;


  return (
    <div className="flex flex-col h-screen justify-between bg-gradient">
      <main className="main">
        <div className="main-text">{tapsMade}</div>
        <div className="sub-text">
          <i className="fas fa-trophy trophy-icon"></i>
          <span>Beginer</span>
          <i className="fas fa-chevron-right"></i>
        </div>
        <img
          src="https://placehold.co/200x200"
          alt="A large golden coin with a 'T' symbol in the center, indicating a currency or token, with text 'POWERED BY SOLANA' around the bottom edge."
          className="image"
          onClick={incrementWidth}
        />
      </main>
      <footer className="footer">
        <div className="progress">
          <div className="progress-bar">
          <div style={{ ...progressBarStyles.myBar, width: `${width}%` }}></div>
          </div>
          <div className="progress-text">{remainingTaps}/10</div>
        </div>
        <div className="button-group">
          <button className="button">
            <i className="fas fa-cat icon"></i>
            Ref
          </button>
          <button className="button">
            <i className="fas fa-check-circle icon"></i>
            Task
          </button>
          <button className="button">
            <div className="circle">
              <i className="fas fa-circle icon"></i>
            </div>
            Tap
          </button>
          <button className="button">
            <i className="fas fa-bolt icon"></i>
            Boost
          </button>
          <button className="button">
            <i className="fas fa-chart-bar icon"></i>
            Stats
          </button>
        </div>
      </footer>
    </div>
  );
}

