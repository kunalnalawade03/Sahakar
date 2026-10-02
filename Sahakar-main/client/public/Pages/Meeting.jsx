import Calendar from '../Components/Calender';

const Meeting = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl text-center mb-4">Meeting Schedule</h1>
      <Calendar />
    </div>
  );
};

export default Meeting;
