import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost/contact.php", formData);
      setResponseMessage(res.data.message);
      setFormData({ name: "", mail: "", subject: "", message: "" });
    } catch (error) {
      setResponseMessage("Error submitting the form.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-center text-blue-900">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

        <form className="space-y-6 mt-3" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950"
              required
            />
          </div>

          <div>
            <input
              type="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950"
              required
            />
          </div>

          <div>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {responseMessage && (
          <p className="text-white text-center mt-4">{responseMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
