import { useRef } from "react";

function App() {
  const inputref = useRef();
  const onButtonClick = () => {
    console.log(inputref.current.value);
  };

  return (
    <>
      <div>
        <input ref={inputref} />
        <button onClick={onButtonClick}>butona tıkla</button>
      </div>
    </>
  );
}

export default App;
