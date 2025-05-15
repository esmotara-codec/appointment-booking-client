import { toast } from "react-toastify";

export const getAppoinment = () => {
    const prevAppoinment = localStorage.getItem('appoinment')
    if (prevAppoinment) return JSON.parse(prevAppoinment);

    return [];
};


export const addAppoinment = (lawer) => {
    const appoinment = getAppoinment()
    const isExist = appoinment.find((item) => item.id === lawer.id)
    if (isExist) {
        return false
    }

    appoinment.push(lawer)
    localStorage.setItem('appoinment', JSON.stringify(appoinment));
    return true
}

export const removeAppoinments = (id) => {
    const appoinment = getAppoinment();
    const remainingAppoinments = appoinment.filter((item) => item.id !== id)
    localStorage.setItem('appoinment', JSON.stringify(remainingAppoinments));
}