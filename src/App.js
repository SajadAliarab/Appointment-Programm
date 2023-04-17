import {BiCalendar,BiTrash} from "react-icons/bi"
import Search from "./components/Search";
import AddAppiontment from "./components/AddApointment";
import appointmnetlist from "./data.json";
import AppointmnetList from "./components/AppointmentList";
function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
     <h1 className="text-5xl">
      <BiCalendar className="inline-block text-red-400 align-top "/> Your Appointments</h1>
      <AddAppiontment/>
      <Search/>
      <AppointmnetList/>
    </div>
  );
}

export default App;
