import React, { useState } from 'react';

const CreateTask = () => {
  const [taskID, setTaskID] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ taskID, taskName, taskDetails, startDate, endDate, assignedTo, department });
    setTaskID('');
    setTaskName('');
    setTaskDetails('');
    setStartDate('');
    setEndDate('');
    setAssignedTo('');
    setDepartment('');
  };

  return (
    <div className="w-1/2 mx-auto p-5 border border-gray-300 rounded-lg bg-white shadow-md">
    <h1 className="text-center mb-5 text-3xl font-bold">Assign New Task</h1>
<form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="taskName" className="block mb-1 font-bold">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="taskDetails" className="block mb-1 font-bold">Task Details:</label>
          <textarea
            id="taskDetails"
            value={taskDetails}
            onChange={(e) => setTaskDetails(e.target.value)}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded resize-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block mb-1 font-bold">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block mb-1 font-bold">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assignedTo" className="block mb-1 font-bold">Assigned To: Project Head Name</label>
          <input
            type="text"
            id="assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block mb-1 font-bold">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a department</option>
            <option value="Electricity">Electricity Department</option>
            <option value="Gas">Gas Department</option>
            <option value="Road">Road Department</option>
            <option value="Oil">Oil Department</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
