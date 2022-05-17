import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content-wrapper">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <main>
            <Dictionary defaultKeyword="donut" />
          </main>
          <footer className="App-footer">
            <small>
              This project was coded by{" "}
              <a
                href="https://www.linkedin.com/in/asthermoreno10/"
                target="_blank"
                rel="noreferrer"
              >
                Ash Moreno
              </a>
              , and is {""}
              <a
                href="https://github.com/AshM10/react-dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on Github.
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
