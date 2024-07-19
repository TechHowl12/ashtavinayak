import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    eventdate: "",
    guestsnumbers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "First name is required.";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid mobile number is required (10 digits).";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email address is required.";
    if (!formData.eventdate) newErrors.eventdate = "Event date is required.";
    if (!formData.guestsnumbers.trim() || isNaN(formData.guestsnumbers) || Number(formData.guestsnumbers) <= 0)
      newErrors.guestsnumbers = "Valid number of guests is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Validate and prevent submission if errors exist

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxnO6v73Wo75HQWH-XgHggvO219GeFDywre1oSlrkTxSaYy0uhRHlRUOKsj9B5puoDi/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setIsSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        eventdate: "",
        guestsnumbers: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="form" className="bg-[#ffffff] p-5 sm:p-10 w-full flex flex-col gap-y-1 rounded-lg">
      <h1 className="text-center text-2xl">Enquire Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label className="text-lg">
            First Name<span className="text-red-500"> *</span>
          </label>
          <input
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${errors.name ? 'border-red-500' : ''}`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mt-2">
          <label className="text-lg">
            Mobile Number<span className="text-red-500"> *</span>
          </label>
          <input
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${errors.mobile ? 'border-red-500' : ''}`}
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>
        <div className="mt-2">
          <label className="text-lg">
            Email<span className="text-red-500"> *</span>
          </label>
          <input
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mt-2">
          <label className="text-lg">
            Event Date<span className="text-red-500"> *</span>
          </label>
          <input
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${errors.eventdate ? 'border-red-500' : ''}`}
            type="date"
            name="eventdate"
            value={formData.eventdate}
            onChange={handleChange}
          />
          {errors.eventdate && <p className="text-red-500 text-sm">{errors.eventdate}</p>}
        </div>
        <div className="mt-2">
          <label className="text-lg">
            No of Guests<span className="text-red-500"> *</span>
          </label>
          <input
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${errors.guestsnumbers ? 'border-red-500' : ''}`}
            type="text"
            name="guestsnumbers"
            value={formData.guestsnumbers}
            onChange={handleChange}
          />
          {errors.guestsnumbers && <p className="text-red-500 text-sm">{errors.guestsnumbers}</p>}
        </div>
        <div className="mt-2">
          <label className="text-lg">Additional Information</label>
          <input
            className="w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {isSubmitted ? (
          <h1 className="bg-transparent flex justify-center items-center border-2 w-1/2 mx-auto mt-4 border-[#d8ac47eb] px-6 py-2">
            Submitted
          </h1>
        ) : (
          <button
            className={`bg-transparent flex justify-center items-center border-2 w-1/2 mx-auto mt-4 border-[#d8ac47eb] px-6 py-2 ${isSubmitting ? 'bg-gray-300' : ''}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
