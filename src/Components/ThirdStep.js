import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

function ThirdStep() {
  const { setStep, finalData, returnbtn } = useContext(multiStepContext);

  return (
    <div className="md:w-full sm:w-full">
      <h2 className="text-lg font-semibold my-8">Result</h2>
      <div className="mb-4">
        {finalData.map((data) => (
          <>
            <p className="text-lg font-semibold mb-2 text-left	">
              First Name: <span className="font-normal">{data.firstname}</span>
            </p>
            <p className="text-lg font-semibold mb-2 text-left">
              Last name: <span className="font-normal">{data.lastname}</span>
            </p>
            <p className="text-lg font-semibold mb-2 text-left	">
              Country: <span className="font-normal">{data.country}</span>
            </p>
            <p className="text-lg font-semibold mb-2 text-left	">
              City : <span className="font-normal">{data.city}</span>
            </p>
            <p className="text-lg font-semibold mb-2 text-left	">
              Email: <span className="font-normal">{data.email}</span>
            </p>
            <p className="text-lg font-semibold mb-2 text-left	">
              Phone Number:{" "}
              <span className="font-normal">{data.phonenumber}</span>
            </p>
            <p className="text-lg font-semibold mb-2 text-left	">
              interests:
              <span className="font-normal">
                {data.interests.map((interest) => (
                  <span key={interest}>  {interest}  ,  </span>
                ))}
              </span>
            </p>
          </>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-500	text-white px-5 py-2 rounded-sm mt-6 text-right"
          onClick={returnbtn}
        >
          Back to Step 1
        </button>
      </div>
    </div>
  );
}

export default ThirdStep;
