import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Complaints = () => {
  const [editingComplaint, setEditingComplaint] = useState(null);
  const [complaints, setComplaints] = useState([
    {
      id: 'C1234',
      name: 'Raj Kumar Sharma',
      subject: 'Street Lights not working',
      date: '17/2/2024',
      dueDate: '19/6/2024',
      status: 'Completed',
      platform: 'Mobile App',
      location: 'Baner, Pune',
    },
    {
      id: 'C1235',
      name: 'Aarti Patel',
      subject: 'Dustbins are overflowing',
      date: '20/2/2024',
      dueDate: '22/6/2024',
      status: 'Assigned',
      platform: 'Website',
      location: 'Hadapsar, Pune',
    },
    {
      id: 'C1236',
      name: 'Sunil Verma',
      subject: 'Electricity pole is damaged',
      date: '25/2/2024',
      dueDate: '30/6/2024',
      status: 'In Progress',
      platform: 'Mobile App',
      location: 'Kothrud, Pune',
    },
    {
      id: 'C1237',
      name: 'Anjali Singh',
      subject: 'Road construction causing traffic issues',
      date: '28/2/2024',
      dueDate: '5/7/2024',
      status: 'Completed',
      platform: 'Website',
      location: 'Viman Nagar, Pune',
    },
    {
      id: 'C1238',
      name: 'Rajiv Mehta',
      subject: 'Government building maintenance required',
      date: '2/3/2024',
      dueDate: '10/7/2024',
      status: 'Assigned',
      platform: 'Mobile App',
      location: 'Camp, Pune',
    },
  ]);

  const [forwardedComplaints, setForwardedComplaints] = useState([
    {
      id: 'F5677',
      name: 'Suresh Raina',
      subject: 'Road Maintenance Request',
      date: '10/9/2024',
      dueDate: '15/12/2024',
      status: 'Forwarded',
      platform: 'Email',
      location: 'Sector 17, Chandigarh',
    },
    {
      id: 'C1238',
      name: 'Rajiv Mehta',
      subject: 'Government building maintenance required',
      date: '2/3/2024',
      dueDate: '10/7/2024',
      status: 'Assigned',
      platform: 'Mobile App',
      location: 'Camp, Pune',
    },
    {
      id: 'F5678',
      name: 'Suresh Raina',
      subject: 'Road Maintenance Request',
      date: '10/9/2024',
      dueDate: '15/12/2024',
      status: 'Forwarded',
      platform: 'Email',
      location: 'Sector 17, Chandigarh',
    },
    {
      id: 'C1239',
      name: 'Meena Sharma',
      subject: 'Broken street pavement',
      date: '5/3/2024',
      dueDate: '15/7/2024',
      status: 'In Progress',
      platform: 'Mobile App',
      location: 'Ghatkopar, Mumbai',
    },
    {
      id: 'C1240',
      name: 'Amit Kumar',
      subject: 'Illegal construction causing problems',
      date: '12/3/2024',
      dueDate: '20/7/2024',
      status: 'Assigned',
      platform: 'Website',
      location: 'Koramangala, Bangalore',
    },
  ]);

  const handleEditClick = (complaint) => {
    setEditingComplaint(complaint);
  };

  const handleChange = (e) => {
    setEditingComplaint({
      ...editingComplaint,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === editingComplaint.id ? editingComplaint : complaint
      )
    );
    setEditingComplaint(null);
  };

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center bg-white p-4 rounded-lg shadow-md mb-5">
        <h1 className="font-medium text-xl sm:text-2xl">Grievances List</h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="border rounded-md p-2 bg-blue-700 text-white hover:bg-blue-600 w-full sm:w-auto">Apply Filter</button>
          <div className="flex items-center gap-3 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md p-2 flex-1"
            />
            <IoSearchSharp size={30} className="cursor-pointer text-blue-700 hover:text-blue-600" />
          </div>
        </div>
      </div>

      <hr className="mb-6 border-gray-300" />

      {/* Complaints table */}
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full text-left bg-white shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <tr className="h-16">
              <th className="px-2 sm:px-4 py-2">C-id</th>
              <th className="px-2 sm:px-4 py-2">Name</th>
              <th className="px-2 sm:px-4 py-2">Subject</th>
              <th className="px-2 sm:px-4 py-2">Date</th>
              <th className="px-2 sm:px-4 py-2">Due Date</th>
              <th className="px-2 sm:px-4 py-2">Status</th>
              <th className="px-2 sm:px-4 py-2">Platform</th>
              <th className="px-2 sm:px-4 py-2">Location</th>
              <th className="px-2 sm:px-4 py-2">Change Status</th>
              <th className="px-2 sm:px-4 py-2">Forward</th>
              <th className="px-2 sm:px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="border-b">
                <td className="px-2 sm:px-4 py-2">{complaint.id}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.name}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.subject}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.date}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.dueDate}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.status}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.platform}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.location}</td>
                <td className="text-lime-800 cursor-pointer px-2 sm:px-4 py-2">Change status</td>
                <td className="text-cyan-900 cursor-pointer px-2 sm:px-4 py-2">Forward</td>
                <td className="px-2 sm:px-4 py-2">
                  <button
                    className="border rounded-md p-1 px-3 bg-blue-100 hover:bg-blue-200"
                    onClick={() => handleEditClick(complaint)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingComplaint && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 className="text-xl font-medium mb-4">Edit Complaint</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editingComplaint.name}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={editingComplaint.subject}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Date</label>
                <input
                  type="text"
                  name="date"
                  value={editingComplaint.date}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Due Date</label>
                <input
                  type="text"
                  name="dueDate"
                  value={editingComplaint.dueDate}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Status</label>
                <input
                  type="text"
                  name="status"
                  value={editingComplaint.status}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Platform</label>
                <input
                  type="text"
                  name="platform"
                  value={editingComplaint.platform}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editingComplaint.location}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setEditingComplaint(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h1 className="text-center text-xl font-medium my-6">Forwarded Complaints</h1>

      <div className="overflow-x-auto">
        <table className="table-auto min-w-full text-left bg-white shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <tr className="h-16">
              <th className="px-2 sm:px-4 py-2">C-id</th>
              <th className="px-2 sm:px-4 py-2">Name</th>
              <th className="px-2 sm:px-4 py-2">Subject</th>
              <th className="px-2 sm:px-4 py-2">Date</th>
              <th className="px-2 sm:px-4 py-2">Due Date</th>
              <th className="px-2 sm:px-4 py-2">Status</th>
              <th className="px-2 sm:px-4 py-2">Platform</th>
              <th className="px-2 sm:px-4 py-2">Location</th>
              <th className="px-2 sm:px-4 py-2">Change Status</th>
              <th className="px-2 sm:px-4 py-2">Forward</th>
              <th className="px-2 sm:px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {forwardedComplaints.map((complaint) => (
              <tr key={complaint.id} className="border-b">
                <td className="px-2 sm:px-4 py-2">{complaint.id}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.name}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.subject}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.date}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.dueDate}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.status}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.platform}</td>
                <td className="px-2 sm:px-4 py-2">{complaint.location}</td>
                <td className="text-lime-800 cursor-pointer px-2 sm:px-4 py-2">Change status</td>
                <td className="text-cyan-900 cursor-pointer px-2 sm:px-4 py-2">Forward</td>
                <td className="px-2 sm:px-4 py-2">
                  <button className="border rounded-md p-1 px-3 bg-blue-100 hover:bg-blue-200">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaints;
