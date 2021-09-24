import { useState } from "react";
import Business from "./component/Business";
import Employment from "./component/Employment";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Introduce from "./component/Introduce";
import IntroImage from "./component/IntroImage";
import Invest from "./component/Invest";
import MainImage from "./component/MainImage";
import Promotion from "./component/Promotion";
import Research from "./component/Research";

function App() {
  const [title, setTitle] = useState("메인");
  const [menu, setMenu] = useState("");
  const [value, setValue] = useState(0);

  type context = {
    [key: string]: any;
  };

  const mainContext: context = {
    메인: <div></div>,
    기업소개: <Introduce value={value} setValue={setValue} />,
    연구소개: <Research value={value} setValue={setValue} />,
    사업소개: <Business value={value} setValue={setValue} />,
    투자정보: <Invest value={value} setValue={setValue} />,
    홍보자료: <Promotion value={value} setValue={setValue} />,
    채용: <Employment value={value} setValue={setValue} />,
  };

  return (
    <div className="App">
      <Header setMenu={setMenu} setValue={setValue} setTitle={setTitle} />
      {title === "메인" ? <IntroImage /> : <MainImage title={title} />}
      <div style={{ height: 500 }}>{mainContext[title]}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
