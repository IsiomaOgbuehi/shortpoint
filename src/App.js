import React, {useState} from 'react';
import './App.css';

function App() {
  const [meter, setMeter] = useState('50%');
  return (
    <div className="App">
      <div className="progress" role="progressbar" data-label="50% Complete">
        <div className="meter meterGreen" style={{ width: meter }}>
          <div className="meter-label">{meter}</div>
        </div>
      </div>
      <div className="progress" role="progressbar" data-label="50% Complete">
        <div className="meter meterRed" style={{ width: meter }}>
          <div className="meter-label">{meter}</div>
        </div>
      </div>
      <div className="progress" role="progressbar" data-label="50% Complete">
        <div className="meter meterWhite" style={{ width: meter }}>
          <div className="meter-label">{meter}</div>
        </div>
      </div>
      <div className="progress" role="progressbar" data-label="50% Complete">
        <div className="meter meterBlue" style={{ width: meter }}>
          <div className="meter-label">{meter}</div>
        </div>
      </div>
      <div className="progress" role="progressbar" data-label="50% Complete">
        <div className="meter meterYellow" style={{ width: meter }}>
          <div className="meter-label">{meter}</div>
        </div>
      </div>
      <button style={{ marginTop: "30px" }} onClick={() => setMeter("100%")}>
        Finish
      </button>
    </div>
  );
}

export default App;
