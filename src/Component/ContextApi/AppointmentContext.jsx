import { createContext, useState, useContext } from 'react'

export const AppointmentContext = createContext()

export const AppointmentProvider = ({ children }) => {
	const [appointments, setAppointments] = useState([])

	const addAppointment = (data) => {
		const newAppointment = { ...data, id: Date.now() }
		setAppointments([...appointments, newAppointment])
	}
	// console.log(appointments)

	const cancelAppointment = (id) => {
		setAppointments(appointments.filter((appointment) => appointment.id !== id))
	}

	return (
		<AppointmentContext.Provider
			value={{ appointments, addAppointment, cancelAppointment }}
		>
			{children}
		</AppointmentContext.Provider>
	)
}

export const useAppointments = () => useContext(AppointmentContext)
