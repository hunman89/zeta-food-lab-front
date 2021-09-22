import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Introduce from "./component/Introduce";
import IntroImage from "./component/IntroImage";
import MainImage from "./component/MainImage";

function App() {
  const [menu, setMenu] = useState("");
  return (
    <div className="App">
      <Header setMenu={setMenu} />
      {menu === "" ? <IntroImage /> : <MainImage menu={menu} />}
      <div style={{ height: 500 }}>
        <Introduce setMenu={setMenu} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
