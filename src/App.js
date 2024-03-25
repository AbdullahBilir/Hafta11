import { useEffect, useRef, useState } from "react";

function App() {
  const [sayı, setSayı] = useState(0);
  const [can, setCan] = useState(3);
  const sayıRef = useRef(0);

  useEffect(() => {
    sayıRef.current++;
    console.log("Sayı Değişti");
    console.log("Sayıref Değişti ", sayıRef.current - 1);
  }, [sayı]);

  return (
    <div>
      <p>
        Sayı: {sayı} Can:{can}
      </p>
      <button
        onClick={() => {
          setSayı((eskideğer) => eskideğer + 5);
        }}
      >
        Sayı Artır (+5)
      </button>

      <button
        onClick={() => {
          setSayı((eskideğer) => eskideğer - 3);
        }}
      >
        Sayı Artır (-3)
      </button>
      <button
        onClick={() => {
          setCan((eskideğer) => eskideğer - 1);
        }}
      >
        Sayı Artır (-3)
      </button>
    </div>
  );
}

export default App;
