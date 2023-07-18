import "./App.css";
import Dictionary from "./js/Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <Dictionary defaultKeyword="sunset" />
      </header>

      <footer className="text-center">Coded By Isa.V18</footer>
    </div>
  );
}

export default App;
