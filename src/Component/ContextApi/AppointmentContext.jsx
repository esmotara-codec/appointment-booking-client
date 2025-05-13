import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (lawersPromise) => {
        const newAppointment = { ...lawersPromise,  id: Date.now() };
        setAppointments([...appointments, newAppointment]);
         toast.success('Appointment added successfully');
  };
console.log(appointments);

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, cancelAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);