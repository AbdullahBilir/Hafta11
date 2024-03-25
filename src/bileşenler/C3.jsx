import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function C3() {
  const veri = useContext(GlobalContext);

  return (
    <div>
      <p>C3</p>
      Son Bileşene Ulaşıldı.. {veri}
    </div>
  );
}

export default C3;
