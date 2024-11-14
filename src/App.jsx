// App.js
import { useState } from "react";
import "./index.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Stream simulate</h1>

      <form onSubmit={() => {}}>
        <div className="mb-3">
          <label htmlFor="disabledSelect" className="form-label">
            Select
          </label>
          <select id="disabledSelect" className="form-select">
            <option>Audio</option>
            <option>Video</option>
          </select>
        </div>

        <div className="form-group row">
          <label htmlFor="delay" className="col-sm-2 col-form-label">
            Delay (ms)
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="delay"
              placeholder="Enter delay in milliseconds"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="seconds" className="col-sm-2 col-form-label">
            Seconds
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="seconds"
              placeholder="Enter number of seconds"
            />
          </div>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="stuckPlaylist"
          />
          <label className="form-check-label" htmlFor="stuckPlaylist">
            Stuck Playlist
          </label>
        </div>
        <button className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
}

export default App;
