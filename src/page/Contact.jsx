import React from "react";
import CommonInputField from "../common/ComonInputFiled";
import { ContactUS } from "../assets";
import SubHeader from "../common/SubHeader";
import PhoneInputComponent from "../common/PhoneInputComponent";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const Onsend = () => {};
  return (
    <div className="my-12">
      <div>
        <SubHeader img={ContactUS} text={"Contact"} />
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl mx-2 md:mx-5 p-5 border border-gray-200 gap-5">

          <div className="md:w-1/2">
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500" data-aos="slide-right">
              If You Have Any Queries, Please Feel Free To Contact Us
            </p>
            <div className="flex flex-wrap gap-5 md:gap-10 mt-10" data-aos="slide-right">
              <div className="flex gap-3">
                <p className="text-blue-500">
                  <FaSquarePhone className="h-8 md:h-10 w-8 md:w-10" />
                </p>
                <div>
                  <p className="text-xl font-semibold text-blue-500">Call Us</p>
                  <p className="cursor-pointer"> +91 123456789</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-blue-500">
                  <MdEmail className="h-8 md:h-11 w-8 md:w-11" />
                </p>
                <div>
                  <p className="text-xl font-semibold text-blue-500">Mail Us</p>
                  <p className="cursor-pointer">
                    dgrouppackersandmovers1@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="slide-left">
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
