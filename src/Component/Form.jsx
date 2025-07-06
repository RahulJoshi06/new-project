import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Sending data:", user);

    axios.post('http://localhost:5000/Router', user)
      .then(response => {
        console.log('Response:', response.data); // ✅ This should now give actual data
        navigate('/table');
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <form onSubmit={submitHandler} className="p-4 border rounded shadow-sm bg-light">
            <h2 className="mb-4 text-center">Detail Form</h2>

            <div className="mb-3">
              <label className="form-label text-start w-100">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                onChange={userHandler}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-start w-100">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={userHandler}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-start w-100">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={userHandler}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>

          <div className="text-center mt-3">
            <Link to="/table" className="btn btn-outline-secondary btn-sm">Go to Table</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
