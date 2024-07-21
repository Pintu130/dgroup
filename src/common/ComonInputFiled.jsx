import React from "react";

const CommonInputField = ({
  label,
  id,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
       className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-sky-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default CommonInputField;
