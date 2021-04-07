import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";

function App() {
  return (
    <div>
      <div className="row">
        <h3 className="ml-3">Character Creator</h3>
      </div>
      <div className="row">
        <div className="col-10">
          <div className="row">
            <div className="col"></div>
          </div>
          <Tavern />
        </div>
        <div className="col-2">
          <MyCharacters />
        </div>
      </div>
    </div>
  );
}

export default App;
