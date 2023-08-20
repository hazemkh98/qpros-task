import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";

function SecondStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  const [showNextBtn, setshowNextBtn] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const availableInterests = [
    "Gaming",
    "Travel",
    "Outdoor activities",
    "community service",
    "Art",
  ];

  const handleInterestChange = (interest) => {
    const updatedSelectedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    setSelectedInterests(updatedSelectedInterests);
    setUserData({
      ...userData,
      interests: updatedSelectedInterests,
    });

    if(selectedInterests.length+1 > 0)
    setshowNextBtn(false)
  };



  return (
    <div>
      <div className="shadow-lg p-8 ">
        <h2 className="text-lg font-semibold my-8">Interests to</h2>

        <div>
          {availableInterests.map((interest) => (
            <label key={interest} className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                className="h-6 w-6 "
                checked={selectedInterests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-500	text-white px-5 py-2 rounded-sm mt-6 text-right"
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button
          className="bg-blue-800 text-white px-5 py-2 rounded-sm mt-6 text-right"
          onClick={submitData}
          disabled={showNextBtn}
        >
          submite
        </button>
      </div>
    </div>
  );
}

export default SecondStep;
