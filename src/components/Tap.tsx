import React, { useState, useEffect } from 'react';

import {
  Card,
  Button,
} from "./styled/styled";

const progressBarStyles = {
  myProgress: {
    width: '100%',
    backgroundColor: '#ddd',
  },
  myBar: {
    width: '100%',
    height: '30px',
    backgroundColor: '#04AA6D',
  },
};

const Tap = () => {
  const maxTaps = 10;
  const [tapsMade, setTapsMade] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(100);

  //increament by 10% every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (width === 0) {
        if (tapsMade < maxTaps) {
          setTapsMade(tapsMade + 1);
        }
        setWidth(100);
      } else {
        if(width == 100){
          return
        }else{
          setWidth(width + (100 / maxTaps));
          remainingTaps
        }
        
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [width, tapsMade]);

  const incrementWidth = () => {
    if(width <= 0){
      return;
    }else{
      const newWidth = width - (100 / maxTaps);
      setWidth(Math.min(newWidth, 100));
      setTapsMade(tapsMade + 1);
    }
  };

  const remainingTaps = maxTaps - tapsMade;

  return (
    <Card>
      <h1>Counter: {tapsMade}</h1>
      <p>Taps: {remainingTaps}/10</p>
      <div style={progressBarStyles.myProgress}>
        <div style={{ ...progressBarStyles.myBar, width: `${width}%` }}></div>
      </div>
      <p></p>
      <Button onClick={incrementWidth}>Click Me</Button>
    </Card>
  );
};

export default Tap;
