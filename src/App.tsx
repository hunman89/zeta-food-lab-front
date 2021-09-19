import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div style={{ height: 500 }}></div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
