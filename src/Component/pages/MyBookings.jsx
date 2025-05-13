import { useAppointments } from "../ContextApi/AppointmentContext";


const MyBookings = () => {
  const { appointments, cancelAppointment } = useAppointments();



  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Today Appointments</h1>
        
        {appointments.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-gray-400 text-4xl mb-3">📅</div>
            <h2 className="text-xl font-semibold text-gray-700">You have no appointments</h2>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">
                      Appointment Fee: {appointment.fee} Taka
                    </p>
                  </div>
                  <button
                    onClick={() => cancelAppointment(appointment.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;