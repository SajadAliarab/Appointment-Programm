import React from 'react';
import {BiCalendar} from "react-icons/bi"
import AppointmnetList from "./components/AppointmentList";
function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
     <h1 className="text-5xl">
      <BiCalendar className="inline-block text-red-400 align-top "/> Your Appointments</h1>

      <AppointmnetList/>
    </div>
  );
}

export default App;
