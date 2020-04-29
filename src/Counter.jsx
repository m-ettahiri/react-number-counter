import React, { useState, useEffect } from "react";
function Counter({ start = 0, end = 60, delay = 1000, repeat }) {
  const [number, setNumber] = useState(start);
  useEffect(() => {
    const interval = setInterval(() => {
      if (start < end) {
        if (number < end) {
          setNumber(previousNumber => previousNumber + 1);
        } else {
          if (repeat) {
            setNumber(start);
            setNumber(previousNumber => previousNumber + 1);
          } else {
            setNumber(end);
            clearInterval(interval);
          }
        }
      }
      if (start > end) {
        if (number > end) {
          setNumber(previousNumber => previousNumber - 1);
        } else {
          if (repeat) {
            setNumber(start);
            setNumber(previousNumber => previousNumber - 1);
          } else {
            setNumber(end);
            clearInterval(interval);
          }
        }
      }
      if (start === end) {
        setNumber(end);
        clearInterval(interval);
      }
    }, delay || 0);
    return () => clearInterval(interval);
  }, [number]);

  return <>{number}</>;
}

export default Counter;
