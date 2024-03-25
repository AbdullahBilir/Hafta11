import { useRef, useState } from "react";

function App() {
  const [sayac, setSayac] = useState(0);
  const puan = useRef(0);

  function setPuan() {
    puan.current += 10;
  }

  return (
    <>
      <div>
        App {puan.current}
        <div>
          {sayac}
          <button
            onClick={() => {
              setSayac((eskideğer) => eskideğer + 5);
            }}
          >
            Sayac Güncelle
          </button>
        </div>
        <div>
          <button onClick={setPuan}>Ref Değerini Güncelle</button>
        </div>
      </div>
    </>
  );
}

export default App;
