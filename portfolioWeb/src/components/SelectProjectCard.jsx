// SelectProjectCard.js
import ResistorCalculator from '../Pages/KalkulatorResistor/ResistorCalculator';
import CircuitCalculator from '../Pages/KalkulatorResistor/CircuitCalculator';
import Converter from '../Pages/Converter/Converter';
import { IoClose } from "react-icons/io5";
const SelectProjectCard = ({ selectedProject, resetSelection }) => {
  return (
    <div className=" mt-8 p-4 relative py-10"  id="viewProject" >
      {selectedProject ? (
        <>
          {selectedProject.title === 'ResistorCalculator' && <ResistorCalculator />}
          {selectedProject.title === 'CircuitCalculator' && <CircuitCalculator />}
          {selectedProject.title === 'Converter' && < Converter/>}
          {/* Jika project yang dipilih bukan kalkulator, tampilkan detail sederhana */}
          {selectedProject.title !== 'ResistorCalculator' && selectedProject.title !== 'CircuitCalculator' && selectedProject.title !== 'Converter'&& (
            <div>
              <h3 className='text-white'>{selectedProject.title}</h3>
              <p className='text-white'>{selectedProject.description}</p>
                
            </div>
          )}
          <div className='flex items-center justify-center relative py-10 '>
            <a href="#projects">
          <IoClose
          
          className=" rounded-full size-9 text-white  bg-gradient-to-br from-blue-500 to-purple-500
          shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" 
          onClick={resetSelection}
          
          
          />

          </a>
          </div>
       
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SelectProjectCard;
