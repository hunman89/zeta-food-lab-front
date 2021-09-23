import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Introduce from "./component/Introduce";
import IntroImage from "./component/IntroImage";
import MainImage from "./component/MainImage";
import Research from "./component/Research";

function App() {
  const [title, setTitle] = useState("");
  const [menu, setMenu] = useState("");
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Header setMenu={setMenu} setValue={setValue} setTitle={setTitle} />
      {title === "" ? <IntroImage /> : <MainImage title={title} />}
      <div style={{ height: 500 }}>
        {title === "기업소개" ? (
          <Introduce value={value} setValue={setValue} />
        ) : (
          <Research value={value} setValue={setValue} />
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
