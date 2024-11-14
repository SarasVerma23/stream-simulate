import { useEffect, useState } from "react";
import Logs from "./Logs";
import "./App.css";
import CopyableInput from "./CopyableInput";

function App() {
  const [showLog, setShowLog] = useState(false);
  const [logMessage, setLogMessage] = useState("Here are the logs...");

  const handleShowLog = () => {
    setShowLog(true);
  };

  const handleCloseLog = () => {
    setShowLog(false);
  };


  useEffect(()=>{
    return(()=>{
      setLogMessage('');
    });
  });

  const [data, setData] = useState({
    url: "",
    simulate: "audio",
    delay: 0,
    segments: 0,
    stuckPlaylist: false,
  });
  const [generatedUrl, setGenerateUrl] = useState("");

  const onChange = (event) => {
    setData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:8000/generateurl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setGenerateUrl(response.generatedUrl);
  };

  return (
    <div className="container mt-4">
      <div className="header">
        <img src="/xperi.jpg" alt="Brand Logo" className="brandLogo" />
      </div>
      <div className="header">
        <h1 className="mb-4">Stream Proxy</h1>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL
          </label>
          <input
            type="url"
            name="url"
            value={data.url}
            onChange={onChange}
            className="form-control"
            id="url"
            placeholder="URL"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="simulate" className="form-label">
            Simulate
          </label>
          <select
            name="simulate"
            value={data.simulate}
            onChange={onChange}
            id="simulate"
            className="form-select"
          >
            <option value="audio">Audio</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="delay" className="col-sm-2 col-form-label">
            Delay (seconds)
          </label>
          <div className="col-sm-10">
            <input
              name="delay"
              value={data.delay}
              onChange={onChange}
              type="number"
              className="form-control"
              id="delay"
              placeholder="Enter delay in seconds"
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="segments" className="col-sm-2 col-form-label">
            Segments
          </label>
          <div className="col-sm-10">
            <input
              name="segments"
              value={data.segments}
              onChange={onChange}
              type="number"
              className="form-control"
              id="segments"
              placeholder="Enter number of segments after delay should occur"
            />
          </div>
        </div>

        <div className="form-check">
          <input
            name="stuckPlaylist"
            value={data.stuckPlaylist}
            onChange={onChange}
            className="form-check-input"
            type="checkbox"
            id="stuckPlaylist"
          />
          <label className="form-check-label" htmlFor="stuckPlaylist">
            Stuck Playlist
          </label>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Generate URL
        </button>
      </form>

      {generatedUrl && <CopyableInput url={generatedUrl} handleShowLog={handleShowLog} />}

      <Logs show={showLog} message={logMessage} onClose={handleCloseLog} />
    </div>
  );
}

export default App;
