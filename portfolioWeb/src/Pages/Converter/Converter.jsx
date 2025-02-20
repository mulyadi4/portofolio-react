import { useState } from "react";
import { IoSwapVerticalOutline } from "react-icons/io5";

const Converter = () => {
  const [conversionType, setConversionType] = useState("berat"); // "berat" atau "panjang"
  const [inputNilai, setInputNilai] = useState(11);
  const [satuanInput, setSatuanInput] = useState(3);
  const [satuanOutput, setSatuanOutput] = useState(3);
  const [outputNilai, setOutputNilai] = useState(11);
  const [pangkatSatuan, setPangkatSatuan] = useState(0);

  // Satuan untuk berat dan panjang

  const satuanBerat = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
  const satuanJarak = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

  // Pilih array satuan berdasarkan tipe konversi
  const satuanOptions = conversionType === "berat" ? satuanBerat : satuanJarak;

  const calculateSatuan = () => {
    const pangkat = satuanOutput - satuanInput;
    const hasil = inputNilai;
    setOutputNilai(hasil);
    setPangkatSatuan(pangkat);
  };

  const swapUnits = () => {
  
    const temp = satuanInput;
    setSatuanInput(satuanOutput);
    setSatuanOutput(temp);

    calculateSatuan();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="block text-2xl font-bold text-center">Kalkulator Konversi</h1>
      {/* Pilihan tipe konversi */}
    

      {/* Input nilai dan satuan input */}
      <div className="flex space-x-2">
        <input
          type="number"
          value={inputNilai}
          onChange={(e) => setInputNilai(parseFloat(e.target.value))}
          className="border p-2 w-full rounded"
          placeholder="Masukkan nilai"
        />
        <select
          value={satuanInput}
          onChange={(e) => setSatuanInput(parseInt(e.target.value))}
          className="border p-2 rounded"
        >
          {satuanOptions.map((satuan, index) => (
            <option key={index} value={index}>
              {satuan}
            </option>
          ))}
        </select>
      </div>

      {/* Tombol Calculate dan Swap */}
      <div className="flex gap-5 justify-center">
     
        <IoSwapVerticalOutline
          onClick={swapUnits}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded cursor-pointer"
          size={40}
        />
      </div>

      {/* Output nilai dan satuan output */}
      <div className="flex space-x-2">
        <div className="border p-2 w-full rounded bg-gray-100 flex items-center justify-center">
          {outputNilai} x 10<sup>{pangkatSatuan}</sup>
        </div>
        <select
          value={satuanOutput}
          onChange={(e) => setSatuanOutput(parseInt(e.target.value))}
          className="border p-2 rounded"
        >
          {satuanOptions.map((satuan, index) => (
            <option key={index} value={index}>
              {satuan}
            </option>
          ))}
        </select>
        
      </div>
      <div className="flex justify-center gap-5">
      <button
          onClick={calculateSatuan}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        <select
          value={conversionType}
          onChange={(e) => {
            setConversionType(e.target.value);
            // Reset satuan ke default (index 3) jika tipe konversi berubah
            setSatuanInput(3);
            setSatuanOutput(3);
          }}
          className="border p-2 rounded"
        >
          <option value="berat">Berat</option>
          <option value="panjang">Panjang</option>
        </select>
      </div>
    </div>
  );
};

export default Converter;
