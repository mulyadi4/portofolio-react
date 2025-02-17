import React, { useState } from "react";

const ResistorCalculator = () => {
  const [jumlahBand, setJumlahBand] = useState("6");
  const [band1, setBand1] = useState("0");
  const [band2, setBand2] = useState("0");
  const [band3, setBand3] = useState("0");
  const [multiplier, setMultiplier] = useState("1");
  const [tolerance, setTolerance] = useState("1");
  const [temperature, setTemperature] = useState("250");
  const [result, setResult] = useState("");

  // Daftar warna untuk digit
  const colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "gray",
    "white",
  ];
  const multiplierColors = {
    "1": "black",
    "10": "brown",
    "100": "red",
    "1000": "orange",
    "10000": "yellow",
    "100000": "green",
    "1000000": "blue",
    "10000000": "violet",
    "100000000": "gray",
    "1000000000": "white",
    "0.1": "gold",
    "0.01": "silver",
  };
  const toleranceColors = {
    "1": "brown",
    "2": "red",
    "0.05": "orange",
    "0.02": "yellow",
    "0.5": "green",
    "0.25": "blue",
    "0.1": "violet",
    "0.01": "gray",
    "5": "gold",
    "10": "silver",
  };
  const temperatureColors = {
    "250": "black",
    "100": "brown",
    "50": "red",
    "15": "orange",
    "25": "yellow",
    "20": "green",
    "10": "blue",
    "5": "violet",
    "1": "gray",
  };

  const calcResistor = () => {
    const bandCount = parseInt(jumlahBand);
    const d1 = parseInt(band1),
      d2 = parseInt(band2),
      d3 = parseInt(band3) || 0;
    const mult = parseFloat(multiplier),
      tol = parseFloat(tolerance),
      temp = parseInt(temperature);
    let resistance = 0,
      text = "";
    if (bandCount === 6) {
      resistance = ((d1 * 100) + (d2 * 10) + d3) * mult;
      text = `${resistance} Ω ± ${tol}% ${temp} ppm/K`;
    } else if (bandCount === 5) {
      resistance = ((d1 * 100) + (d2 * 10) + d3) * mult;
      text = `${resistance} Ω ± ${tol}%`;
    } else if (bandCount === 4) {
      resistance = ((d1 * 10) + d2) * mult;
      text = `${resistance} Ω ± ${tol}%`;
    } else {
      resistance = ((d1 * 10) + d2) * mult;
      text = `${resistance} Ω`;
    }
    setResult(text);
  };

  // Menentukan warna pita resistor berdasarkan jumlah band
  const bandCountNum = parseInt(jumlahBand);
  let bandColors = [];
  if (bandCountNum === 3) {
    bandColors = [colors[band1], colors[band2], multiplierColors[multiplier]];
  } else if (bandCountNum === 4) {
    bandColors = [colors[band1], colors[band2], multiplierColors[multiplier], toleranceColors[tolerance]];
  } else if (bandCountNum === 5) {
    bandColors = [colors[band1], colors[band2], colors[band3], multiplierColors[multiplier], toleranceColors[tolerance]];
  } else if (bandCountNum === 6) {
    bandColors = [
      colors[band1],
      colors[band2],
      colors[band3],
      multiplierColors[multiplier],
      toleranceColors[tolerance],
      temperatureColors[temperature],
    ];
  }

  // Render opsi select untuk warna digit
  const renderOptions = () =>
    colors.map((clr, i) => (
      <option
        key={i}
        value={i}
        style={{ backgroundColor: clr, color: clr === "black" ? "white" : "black" }}
      >
        {clr}
      </option>
    ));
  // Pengaturan posisi pita di body resistor
  const bandWidth = 9;
  const bodyWidth = 230; // lebar body resistor dalam pixel
  const totalBands = bandColors.length;
  const spacing = (bodyWidth - totalBands * bandWidth) / (totalBands + 1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Resistor Calculator</h2>

      {/* Tampilan Gambar Resistor */}
      <div className="flex items-center mb-6">
        {/* Kabel kiri */}
        <div className="w-10 h-1 bg-gray-600"></div>
        {/* Body resistor */}
        <div className="relative w-[220px] h-10 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-inner">
          {bandColors.map((color, index) => {
            const left = spacing * (index + 1) + bandWidth * index;
            return (
              <div
                key={index}
                className="absolute top-0 h-10"
                style={{
                  left: `${left}px`,
                  width: `${bandWidth}px`,
                  backgroundColor: color,
                }}
              ></div>
            );
          })}
        </div>
        {/* Kabel kanan */}
        <div className="w-10 h-1 bg-gray-600"></div>
      </div>

      {/* Form Input */}
      <div className="space-y-3">
        <div>
          <label className="mr-2">Number of Bands:</label>
          <select
            className="border p-1"
            value={jumlahBand}
            onChange={(e) => setJumlahBand(e.target.value)}
          >
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Band 1:</label>
          <select
            className="border p-1"
            value={band1}
            onChange={(e) => setBand1(e.target.value)}
          >
            {renderOptions()}
          </select>
        </div>
        <div>
          <label className="mr-2">Band 2:</label>
          <select
            className="border p-1"
            value={band2}
            onChange={(e) => setBand2(e.target.value)}
          >
            {renderOptions()}
          </select>
        </div>
        {bandCountNum >= 5 && (
          <div>
            <label className="mr-2">Band 3:</label>
            <select
              className="border p-1"
              value={band3}
              onChange={(e) => setBand3(e.target.value)}
            >
              {renderOptions()}
            </select>
          </div>
        )}
        <div>
          <label className="mr-2">Multiplier:</label>
          <select
            className="border p-1"
            value={multiplier}
            onChange={(e) => setMultiplier(e.target.value)}
          >
            {Object.entries(multiplierColors).map(([val, col]) => (
              <option key={val} value={val} 
              style={{ backgroundColor: col, color: col === "black" ? "white" : "black" }}
              >
                {col} (x{val})
                
              </option>
            ))}
          </select>
        </div>
        {bandCountNum >= 4 && (
          <div>
            <label className="mr-2">Tolerance:</label>
            <select
              className="border p-1"
              value={tolerance}
              onChange={(e) => setTolerance(e.target.value)}
            >
              {Object.entries(toleranceColors).map(([val, col]) => (
                <option key={val} value={val}
                style={{ backgroundColor: col, color: col === "black" ? "white" : "black" }}
                >
                  {col} (±{val}%)
                </option>
              ))}
            </select>
          </div>
        )}
        {bandCountNum === 6 && (
          <div>
            <label className="mr-2">Temperature:</label>
            <select
              className="border p-1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            >
              {Object.entries(temperatureColors).map(([val, col]) => (
                <option key={val} value={val}
                style={{ backgroundColor: col, color: col === "black" ? "white" : "black" }}
              
                >
                  {col} ({val} ppm/K)
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          onClick={calcResistor}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Calculate
        </button>
        {result && <div className="mt-2 font-semibold">{result}</div>}
      </div>
    </div>
  );
};

export default ResistorCalculator;
