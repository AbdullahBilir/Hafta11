import { useState } from "react";
import C1 from "./bileşenler/C1";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const [user, setUser] = useState("Orhan Gencebay");

  return (
    <GlobalContext.Provider value={user}>
      <>
        <h1>App</h1>
        <C1 />
      </>
    </GlobalContext.Provider>
  );
}

export default App;
