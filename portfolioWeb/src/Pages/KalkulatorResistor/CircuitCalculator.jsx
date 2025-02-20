import React, { useState } from "react";

const CircuitCalculator = () => {
  const [seriesInput, setSeriesInput] = useState("1,1,1");
  const [seriesResult, setSeriesResult] = useState("");
  const [parallelInput, setParallelInput] = useState("1,1,1");
  const [parallelResult, setParallelResult] = useState("");

  const calcSeries = () => {
    const sum = seriesInput.split(",").reduce((acc, val) => acc + Number(val), 0);
    setSeriesResult(`Jumlah: ${sum}`);
  };

  const calcParallel = () => {
    const invSum = parallelInput.split(",").reduce((acc, val) => acc + 1 / Number(val), 0);
    setParallelResult(`Jumlah: ${1 / invSum}`);
  };

  return (
    <div className="p-4">
      <div className="mt-8">
        <label className="text-white font-semibold">Kalkulator Seri</label>
        <textarea
          value={seriesInput}
          onChange={(e) => setSeriesInput(e.target.value)}
          className="bg-white border w-full  p-2 mt-2"
        />
      
      </div>
      <button onClick={calcSeries} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Calculate
        </button>
        <p className="mt-2">{seriesResult}</p>

      <div className="mt-8">
        <label className="text-white block font-semibold">Kalkulator Pararel</label>
        <textarea
          value={parallelInput}
          onChange={(e) => setParallelInput(e.target.value)}
          className="bg-white border w-full  p-2 mt-2"
        />
      
      </div>
      <button onClick={calcParallel} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Calculate
        </button>
        <p className="mt-2">{parallelResult}</p>
    </div>
  );
};

export default CircuitCalculator;
