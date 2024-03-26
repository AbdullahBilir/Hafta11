import { useEffect, useRef, useState } from "react";

function Timer() {
  const [sayac, setSayac] = useState(0);
  const intervalRef = useRef();
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log("timetick");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      {intervalRef.current}
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <br />
      {sayac}
      <button
        onClick={() => {
          setSayac((eskideğer) => eskideğer + 5);
        }}
      >
        Arttır
      </button>
    </div>
  );
}

export default Timer;
