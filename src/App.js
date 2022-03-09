import "./App.css";
import TrickTable from "./view/TrickTable";

function App() {
  return (
    <div className="App">
      <h1>11th Card Trick</h1>
      <p>
        Choose one card in the columns and then keep clicking the column where
        the chosen card is.
      </p>
      <TrickTable />
    </div>
  );
}

export default App;
