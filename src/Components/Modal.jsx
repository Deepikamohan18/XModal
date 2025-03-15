import React, { useState } from "react";

const Modal = ({ setIsModalOpen, setModalOpenBackground }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleBackgroundClick = () => {
    setIsModalOpen(false);
    setModalOpenBackground(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      window.alert("Invalid email");
      return;
    }

    if (formData.phone.length < 10) {
      window.alert("Invalid phone number");
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (currentDate < inputDate) {
      window.alert("Invalid date of birth");
      return;
    }
  };

  return (
    <div className="modalBackground" onClick={handleBackgroundClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h1>Fill Details</h1>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <h3>Username:</h3>
            </label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

            <label htmlFor="email">
              <h3>Email Address:</h3>
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">
              <h3>Phone Number:</h3>
            </label>
            <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

            <label htmlFor="dob">
              <h3>Date of Birth:</h3>
            </label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
            <br />

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
