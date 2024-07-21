import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

const PhoneInputComponent = () => {
  const [value, setValue] = useState();
  const [error, setError] = useState('');

  const handleChange = (value) => {
    setValue(value);
    if (value && !isValidPhoneNumber(value)) {
      setError('Invalid phone number');
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="phone"
      >
        Phone Number
      </label>
      <div className="relative">
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="IN"
          value={value}
          onChange={handleChange}
          className="phone-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default PhoneInputComponent;
