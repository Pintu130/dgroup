import React from "react";
import CommonInputField from "../common/ComonInputFiled";
import { ContactUS } from "../assets";
import SubHeader from "../common/SubHeader";
import PhoneInputComponent from "../common/PhoneInputComponent";

const Contact = () => {
  const Onsend = () => {};
  return (
    <div className="my-12">
      <div>
        <SubHeader img={ContactUS} text={"Contact"} />
      </div>
      <div className="mt-10">
        <div className="flex bg-white rounded-2xl shadow-xl mx-5 p-5 border border-gray-200">
          <div className="w-1/2 text-5xl font-bold">
            If You Have Any Queries, Please Feel Free To Contact Us
          </div>
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-3">
              <CommonInputField
                label="Name"
                id="name"
                placeholder="Name"
                required
              />
              <PhoneInputComponent />
            </div>
            <CommonInputField
              label="Email"
              id="email"
              placeholder="Enter email address"
              required
              type="email"
            />
            <div className="grid grid-cols-2 gap-3">
              <CommonInputField
                label="From"
                id="from"
                placeholder="From"
                required
              />
              <CommonInputField label="To" id="to" placeholder="To" required />
            </div>
            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className="bg-blue-500 px-5 text-white py-2 font-semibold hover:bg-blue-600"
                onClick={Onsend}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
