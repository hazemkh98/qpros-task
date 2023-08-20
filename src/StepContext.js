import React, { useState } from "react";
import App from "./App";

export const multiStepContext = React.createContext();

function StepContext() {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData=()=>{
        setFinalData(finalData=>[...finalData,userData]);
        
        setStep(3)
        
  }

  const returnbtn=()=>{
    setUserData('');
    setFinalData('')
    setStep(1)
  }

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
          returnbtn
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
}

export default StepContext;
