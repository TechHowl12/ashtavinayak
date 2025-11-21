import React, { useState, useEffect } from "react";

const DEPLOY_URL = "https://script.google.com/macros/s/AKfycbwNRBvO_HviUQ6CU2y0XVxwfSYClvd79ghfKnLkkTfdgfDcd9kpvI03biJhhBDLQ6YU/exec";

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
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "First name is required.";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid mobile number is required (10 digits).";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email address is required.";
    if (!formData.eventdate) newErrors.eventdate = "Event date is required.";
    if (
      !formData.guestsnumbers.trim() ||
      isNaN(formData.guestsnumbers) ||
      Number(formData.guestsnumbers) <= 0
    )
      newErrors.guestsnumbers = "Valid number of guests is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      eventdate: "",
      guestsnumbers: "",
      message: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Build FormData to avoid preflight CORS issues
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => fd.append(k, v ?? ""));

      const response = await fetch(DEPLOY_URL, {
        method: "POST",
        body: fd,
      });

      // read response text for debugging (Apps Script returns JSON)
      const text = await response.text().catch(() => "");
      console.log("submit response status:", response.status, "text:", text);

      if (!response.ok && response.status !== 200) {
        // non-200 (and not 200) — treat as error
        throw new Error("Server returned status " + response.status);
      }

      // Optionally try to parse JSON response
      let parsed;
      try {
        parsed = JSON.parse(text || "{}");
      } catch (err) {
        parsed = null;
      }
      console.log("parsed response:", parsed);

      // success UI
      setIsSubmitted(true);
      setShowModal(true);
      clearForm();
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed. Check console for details and ensure the Apps Script is deployed and accessible.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="form" className="bg-[#ffffff] p-5 sm:p-10 w-full flex flex-col gap-y-1 rounded-lg">
      <h1 className="text-center text-2xl">Enquire Now</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mt-2">
          <label className="text-lg">
            First Name<span className="text-red-500"> *</span>
          </label>
          <input
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${
              errors.name ? "border-red-500" : ""
            }`}
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
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${
              errors.mobile ? "border-red-500" : ""
            }`}
            type="text"
            name="mobile"
            inputMode="numeric"
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
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${
              errors.email ? "border-red-500" : ""
            }`}
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
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${
              errors.eventdate ? "border-red-500" : ""
            }`}
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
            className={`w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2 ${
              errors.guestsnumbers ? "border-red-500" : ""
            }`}
            type="number"
            name="guestsnumbers"
            min="1"
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
            className={`bg-transparent flex justify-center items-center border-2 w-1/2 mx-auto mt-4 border-[#d8ac47eb] px-6 py-2 ${
              isSubmitting ? "bg-gray-300 cursor-not-allowed" : "hover:scale-105"
            }`}
            type="submit"
            disabled={isSubmitting}
            id="clicked"
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        )}
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowModal(false)}
          />

          {/* modal box */}
          <div className="relative max-w-lg w-full bg-white playwrite rounded-2xl shadow-lg border-2 border-[#d8ac47eb] p-6 z-10">
            <h2 className="text-xl font-semibold text-center">Enquiry Sent</h2>
            <h2 className="text-center mt-2">
              Thank you! Your enquiry has been submitted successfully. We will get back to you soon.
            </h2>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border-2 border-[#d8ac47eb] rounded-md bg-transparent"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
