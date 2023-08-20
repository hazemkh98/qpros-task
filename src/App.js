import "./App.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
import LeftSection from "./Components/LeftSection";

function App() {
  const { currentStep, FinalData } = useContext(multiStepContext);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  };

  return (
    <div className="App">
      <div className="flex flex-col md:flex-row h-screen	 ">
        <LeftSection />
        <div className="w-full md:w-3/5  p-8  bg-gray-100">
          <Stepper
            style={{ width: "100%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          {showStep(currentStep)}
        </div>
      </div>
    </div>
  );
}

export default App;
