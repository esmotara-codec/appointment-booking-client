import { Suspense } from "react";
import Banner from "./Component/Banner/Banner"
import Lawers from "./Component/Lawer/Lawers";
import NavBar from "./Component/NavBar/NavBar"

function App() {

  const lawersPromise =fetch('lawersData.json').then((res) => res.json());
  

  return (
    <div className="">
   <NavBar/>
   <Banner/>
   <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <Lawers lawersPromise={lawersPromise}/>
   </Suspense>

      
    </div>
  )
}

export default App
