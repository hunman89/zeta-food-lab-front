import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import IntroImage from "./component/IntroImage";
import MainImage from "./component/MainImage";
import TechBackground from "./images/tech-background.jpg";

function App() {
  const [menu, setMenu] = useState("");
  return (
    <div className="App">
      {menu === "" ? (
        <div style={{ backgroundImage: `url(${TechBackground})` }}>
          <Header setMenu={setMenu} />
          <IntroImage />
        </div>
      ) : (
        <>
          <Header setMenu={setMenu} />
          <MainImage menu={menu} />
        </>
      )}
      <div style={{ height: 500 }}></div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
