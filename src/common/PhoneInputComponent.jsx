import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneInputComponent = ({ error, onChange, value }) => {
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
          onChange={onChange}
          className={`phone-input bg-gray-50 border ${error ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:outline-sky-500 block w-full p-2.5`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default PhoneInputComponent;
