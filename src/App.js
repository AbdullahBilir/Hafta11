import { useEffect } from "react";
import { useRef } from "react";

function App({ prop }) {
  const useRefPrev = useRef(prop);

  useEffect(() => {
    console.log("Önceki Değer", useRefPrev.current);
    console.log("Güncel Değer", prop);
    useRefPrev.current = prop;
  }, [prop]);

  return (
    <div>
      <p>Prop: {prop}</p>
    </div>
  );
}

export default App;
