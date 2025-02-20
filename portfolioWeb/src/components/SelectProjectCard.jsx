// SelectProjectCard.js
import ResistorCalculator from '../Pages/KalkulatorResistor/ResistorCalculator';
import CircuitCalculator from '../Pages/KalkulatorResistor/CircuitCalculator';
import Converter from '../Pages/Converter/Converter';

const SelectProjectCard = ({ selectedProject, resetSelection }) => {
  return (
    <div className=" mt-8 p-4">
      {selectedProject ? (
        <>
          {selectedProject.title === 'ResistorCalculator' && <ResistorCalculator />}
          {selectedProject.title === 'CircuitCalculator' && <CircuitCalculator />}
          {selectedProject.title === 'Converter' && < Converter/>}
          {/* Jika project yang dipilih bukan kalkulator, tampilkan detail sederhana */}
          {selectedProject.title !== 'ResistorCalculator' && selectedProject.title !== 'CircuitCalculator' && selectedProject.title !== 'Converter'&& (
            <div>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>
          )}
          <button 
            className="mt-4 text-blue-500" 
            onClick={resetSelection}
          >
            Close
          </button>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SelectProjectCard;
