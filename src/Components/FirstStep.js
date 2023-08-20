import React, { useContext, useState, useEffect } from "react";
import { multiStepContext } from "../StepContext";

function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showNextBtn, setshowNextBtn] = useState(true);

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, firstname: value });
    if (value.length < 3) {
      setFirstNameError("First Name must be at least 3 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, email: value });
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  useEffect(() => {
    // Fetch countries from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = async (e) => {
    const selectedCountryCode = e.target.value;
    setSelectedCountry(selectedCountryCode);
    setUserData({
      ...userData,
      country: e.target.options[e.target.selectedIndex].text,
    });
    // Fetch cities for the selected country from the API
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${selectedCountryCode}`
      );
      const data = await response.json();
      const countryCities = data[0]?.altSpellings || [];
      setCities(countryCities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setUserData({ ...userData, city: e.target.value });
  };

const checkInputs = () => {
  if(
    userData["firstname"] == "" &&
    userData["lastname"] == "" &&
    userData["email"] == "" &&
    userData["phonenumber"] == "" &&
    userData["city"] == "" &&
    userData["country"] == "")
    {
      setshowNextBtn(true)
    }
    else {
      setshowNextBtn(false)
    }

};

  return (
    <div>
      <h2 className="text-lg font-semibold my-8">
        Please fill with your details
      </h2>
      <div className="mb-4">
        <input
          placeholder="First Name"
          type="text"
          className={`w-full px-3 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500 ${
            firstNameError ? "border-red-500" : ""
          }`}
          onChange={handleFirstNameChange}
          value={userData["firstname"]}
          onBlur={checkInputs}
        />
        {firstNameError ? (
          <div className="text-left text-red-500">
            {" "}
            First Name should be at least 3 character{" "}
          </div>
        ) : (
          ""
        )}
        <input
          placeholder="Last Name"
          type="text"
          className="w-full px-3 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          value={userData["lastname"]}
          onBlur={checkInputs}
        />
        <input
          placeholder="Your email"
          type="text"
          className={`w-full px-3 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500 ${
            emailError ? "border-red-500" : ""
          }`}
          onChange={handleEmailChange}
          value={userData["email"]}
          onBlur={checkInputs}
        />
        {emailError && <p className="text-left  text-red-500">{emailError}</p>}
        <div className="flex">
          <div className="w-1/2 pr-2">
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              onBlur={checkInputs}
              className="w-full px-3 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" className="placeholder-option" disabled>
                Your country
              </option>
              {countries.map((country) => (
                <option
                  key={country.cca2}
                  value={country.cca2}
                  disabled={["CN", "US", "RU", "AU"].includes(country.cca2)}
                >
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 pr-2">
            <select
              value={selectedCity}
              onChange={handleCityChange}
              onBlur={checkInputs}
              className="w-full px-3 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          placeholder="Your Phone"
          type="text"
          className="w-full px-3 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) =>
            setUserData({ ...userData, phonenumber: e.target.value })
          }
          value={userData["phonenumber"]}
          onBlur={checkInputs}
        />
      </div>

      <div className="flex justify-end">
        <button
          className={`bg-blue-800	text-white px-5 py-2 rounded-sm mt-6 text-right  ${showNextBtn ? "opacity-0" : ""}`}
          onClick={() => setStep(2)}
          disabled={showNextBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FirstStep;
