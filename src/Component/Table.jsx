import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Table = () => {
  const [user, setUser] = useState([]);
  const [onedata, setOnedata] = useState(null);
  const navigate = useNavigate();

  const getdata = async () => {
    try {
      const res = await axios.get('http://localhost:5000/getuser');
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const deleteuser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      getdata();
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const getOnedata = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/getid/${id}`);
      if (res.data.success) {
        setOnedata(res.data);
      }
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Data</h2>
        <Link to="/" className="btn btn-primary">Go to Form</Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style={{ width: '220px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) && user.length > 0 ? (
              user.map((i) => (
                <tr key={i._id}>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>
                    <div className="d-flex gap-2 flex-wrap">
                      <button className="btn btn-danger btn-sm" onClick={() => deleteuser(i._id)}>Delete</button>
                      <button className="btn btn-info btn-sm" onClick={() => getOnedata(i._id)}>View</button>
                      <button className="btn btn-warning btn-sm" onClick={() => navigate(`/newform/${i._id}`)}>Edit</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No user data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {onedata && (
        <div className="alert alert-secondary mt-4">
          <strong>Password:</strong> {onedata.password}
        </div>
      )}
    </div>
  );
};

export default Table;
