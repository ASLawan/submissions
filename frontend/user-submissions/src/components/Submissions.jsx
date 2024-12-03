/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import api from "../api";

const Submissions = () => {
  const [submissions, setSubmissons] = useState([]);
  const [editSubmission, setEditSubmission] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await api.get("/submissions");
        setSubmissons(response.data);
      } catch (error) {
        alert(`Error fetching submmisions: ${error.message}`);
      }
    };
    fetchSubmissions();
  }, []);

  // Delete submission
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this Submission?")) {
      return;
    }
    try {
      await api.delete(`/submissions/${id}`);
      setSubmissons(submissions.filter((submission) => submission.id !== id));
    } catch (error) {
      alert("Error deleting submission");
    }
  };

  // Open Model for editing
  const openModel = (submission) => {
    setEditSubmission({ ...submission });
    setShowModal(true);
  };

  // Update Submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/submissions/${editSubmission.id}`, editSubmission);

      setSubmissons((prev) =>
        prev.map((submission) =>
          submission.id === editSubmission.id ? editSubmission : submission
        )
      );

      setShowModal(false);
      alert("Successfully updated Submission");
    } catch (error) {
      alert("Failed to update submission");
    }
  };
  return (
    <div className="container mt-4">
      <div className="row text-center p-4">
        <h2 id="sub-title">Submissions</h2>
      </div>
      <table className="table table-bordered text-center">
        <thead>
          <tr id="thead">
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Department</th>
            <th>Comments</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id} id="tbody">
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.dateOfBirth}</td>
              <td>{submission.department}</td>
              <td>{submission.comments}</td>
              <td>
                <button
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => openModel(submission)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(submission.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-title">
                  Update Submission
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <form onSubmit={handleUpdate} id="modal-form">
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={editSubmission.name}
                      onChange={(e) =>
                        setEditSubmission({
                          ...editSubmission,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={editSubmission.email}
                      onChange={(e) =>
                        setEditSubmission({
                          ...editSubmission,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={editSubmission.dateOfBirth}
                      onChange={(e) =>
                        setEditSubmission({
                          ...editSubmission,
                          dateOfBirth: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">
                      Department
                    </label>
                    <select
                      className="form-select"
                      id="department"
                      name="department"
                      value={editSubmission.department}
                      onChange={(e) =>
                        setEditSubmission({
                          ...editSubmission,
                          department: e.target.value,
                        })
                      }
                      required
                    >
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
                      className="form-control"
                      id="comments"
                      name="comments"
                      value={editSubmission.comments}
                      onChange={(e) =>
                        setEditSubmission({
                          ...editSubmission,
                          comments: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Submissions;
