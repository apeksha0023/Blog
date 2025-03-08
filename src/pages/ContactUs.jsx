import React, { useState } from "react";
import "../styles/ContactUs.css";  


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <select name="subject" value={formData.subject} onChange={handleChange} required>
          <option value="">Select Subject</option>
          <option value="Coach">Coach</option>
          <option value="Institute/Organisation">Institute/Organisation</option>
          <option value="Trainee/Coach">Trainee/Coach</option>
        </select>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <input name="phone" type="tel" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default ContactUs;