import React, { useState } from "react";
import { ContactUS } from "../assets";
import SubHeader from "../common/SubHeader";
import PhoneInputComponent from "../common/PhoneInputComponent";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CommonInputField from "../common/CommonInputField";
import { isValidPhoneNumber } from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../common/Loader";
import Footer from "./Footer/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isloading, setIsloading] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleChangePhone = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
    if (value && !isValidPhoneNumber(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Invalid phone number",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.from) newErrors.from = "From location is required";
    if (!formData.to) newErrors.to = "To location is required";
    if (!formData.address) newErrors.address = "Current address is required";
    return newErrors;
  };

  const onSend = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Additional validation for phone number format and email format
    if (!isValidPhoneNumber(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Invalid phone number format",
      }));
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email format",
      }));
      return;
    }

    const serviceId = "service_o68mfjn"; /* service_i3slc7h */
    const templateId = "template_djggo2t"; /* template_6ovalan */
    const publicKey = "NoOf6BVa2AXsk-4Po"; /* cvthlDMfpnnY1x0HM */

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      from: formData.from,
      to: formData.to,
      address: formData.address,
    };
    setIsloading(true);
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setIsloading(false);
        toast.success("Message sent successfully!");
        // Reset form data after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          from: "",
          to: "",
          address: "",
        });
      },
      (error) => {
        setIsloading(false);
        toast.error("Failed to send message, please try again later.");
      }
    );
  };

  return (
    <div className="mt-12">
      <div>
        <SubHeader img={ContactUS} text={"Contact"} />
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl mx-2 md:mx-5 p-5 border border-gray-200 gap-5">
          <div className="md:w-1/2" data-aos="fade-up">
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500">
              If You Have Any Queries, Please Feel Free To Contact Us
            </p>
            <div className="flex flex-wrap gap-5 md:gap-10 mt-10">
              <a href="tel:+919558037242" className="flex gap-3">
                <p className="text-blue-500">
                  <FaSquarePhone className="h-8 md:h-10 w-8 md:w-10" />
                </p>
                <div>
                  <p className="text-xl font-semibold text-blue-500">Call Us</p>
                  <p className="text-sm md:text-base cursor-pointer">
                    +919558037242
                  </p>
                </div>
              </a>
              <div className="">
                <a
                  href="mailto:dgrouppackersandmovers1@gmail.com"
                  className="flex gap-3"
                >
                  <p className="text-blue-500">
                    <MdEmail className="h-8 md:h-11 w-8 md:w-11" />
                  </p>
                  <div>
                    <p className="text-xl font-semibold text-blue-500">
                      Mail Us
                    </p>
                    <p className="text-sm md:text-base cursor-pointer hidden md:block">
                      dgrouppackersandmovers1@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:dgrouppackersandmovers1@gmail.com"
                  className="text-sm md:text-base cursor-pointer block md:hidden"
                >
                  dgrouppackersandmovers1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <div className="grid grid-cols-2 gap-3">
              <CommonInputField
                label="Name"
                id="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <PhoneInputComponent
                value={formData.phone}
                onChange={handleChangePhone}
                error={errors.phone}
              />
            </div>
            <CommonInputField
              label="Email"
              id="email"
              placeholder="Enter email address"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <div className="grid grid-cols-2 gap-3">
              <CommonInputField
                label="From"
                id="from"
                placeholder="From"
                required
                value={formData.from}
                onChange={handleChange}
                error={errors.from}
              />
              <CommonInputField
                label="To"
                id="to"
                placeholder="To"
                required
                value={formData.to}
                onChange={handleChange}
                error={errors.to}
              />
            </div>

            <CommonInputField
              label="Current Address"
              id="address"
              placeholder="Enter your current address"
              required
              type="address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
            />

            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className="bg-blue-500 px-5 text-white py-2 font-semibold hover:bg-blue-600"
                onClick={onSend}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-5">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2920511342687!2d72.9940037150702!3d21.701308385610847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f719ae0d5a815%3A0x27e8c9e8b287e70c!2sSanskar%20Avenue%2C%20Zadeshwar%20Rd%2C%20Zadeshwar%2C%20Bharuch%2C%20Gujarat%20392011!5e0!3m2!1sen!2sin!4v1628230946541!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
      <ToastContainer />
      <Loader loading={isloading} />
    </div>
  );
};

export default Contact;
