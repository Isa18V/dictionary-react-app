import "./App.css";
import Dictionary from "./js/Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <Dictionary defaultKeyword="sunset" />
      </header>

      <footer className="text-center">
        This project was coded by
        <a href="https://isabel-portfolio.netlify.app/"> Isabel voican </a>
        and is
        <a href="https://github.com/Isa18V/dictionary-react-app">
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and hosted on
        <a href="https://dictionary-react-app-isav18.netlify.app/"> Netlify </a>
      </footer>
    </div>
  );
}

export default App;
