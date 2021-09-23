import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Introduce from "./component/Introduce";
import IntroImage from "./component/IntroImage";
import MainImage from "./component/MainImage";

function App() {
  const [menu, setMenu] = useState("");
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Header setMenu={setMenu} setValue={setValue} />
      {menu === "" ? <IntroImage /> : <MainImage menu={menu} />}
      <div style={{ height: 500 }}>
        <Introduce value={value} setValue={setValue} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
