import { toast } from "react-toastify";

export const getAppoinment = () => {
     const prevAppoinment = localStorage.getItem('appoinment')
     if( prevAppoinment )  return JSON.parse(prevAppoinment);
     
    return [];
};
 

export const addAppoinment = (lawer) => {
    const appoinment = getAppoinment()
     const isExist = appoinment.find((item) => item.id === lawer.id)
     if (isExist) {
        return toast('Already booked this lawyer')    
     }
     else {
         appoinment.push(lawer)
     }
    
console.log(appoinment);
localStorage.setItem('appoinment', JSON.stringify(appoinment));
}