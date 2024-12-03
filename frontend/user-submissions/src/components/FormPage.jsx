import { useState } from "react";
import api from "../api";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    department: "",
    comments: "",
  });

  // read formData
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/submissions", formData);
      alert(`Submission Successful!`);
      setFormData({
        name: "",
        email: "",
        dateOfBirth: "",
        department: "",
        comments: "",
      });
    } catch (error) {
      alert(`Submission failed: ${error.message}`);
    }
  };

  // return
  return (
    <>
      <div className="container mt-4">
        <div className="row text-center pt-3 pb-3">
          <h2 id="form-title">Submit Your Details</h2>
        </div>
        <form onSubmit={handleSubmit} id="form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="HR">Human Resource</option>
              <option value="IT">Information Technology</option>
              <option value="ENG">Engineering</option>
              <option value="MKT">Marketing</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">
              Comments
            </label>
            <textarea
              name="comments"
              id="comments"
              className="form-control"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormPage;
