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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        eventdate: "",
        guestsnumbers: "",
        message: "",
      });
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
            className="w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg">
            Mobile Number<span className="text-red-500"> *</span>
          </label>
          <input
            className="w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2"
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg">
            Email<span className="text-red-500"> *</span>
          </label>
          <input
            className="w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg">
            Event Date<span className="text-red-500"> *</span>
          </label>
          <input
            className="w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2"
            type="date"
            name="eventdate"
            value={formData.eventdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg">
            No of Guests<span className="text-red-500"> *</span>
          </label>
          <input
            className="w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2"
            type="text"
            name="guestsnumbers"
            value={formData.guestsnumbers}
            onChange={handleChange}
            required
          />
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
            className="bg-transparent flex justify-center items-center border-2 w-1/2 mx-auto mt-4 border-[#d8ac47eb] px-6 py-2"
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
