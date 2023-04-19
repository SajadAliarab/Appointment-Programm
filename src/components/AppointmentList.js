import React, { useState } from 'react';
import { BiTrash } from "react-icons/bi";
import appointmnetlist from "../data.json"
import Search from './Search';
import AddAppiontment from './AddApointment';
 const  AppointmnetList =  () => {
    const [appoin,SetApp]=useState(...[appointmnetlist]);
    const [query,setQuery]=useState("");
    const [sortBy,setSortBy] = useState("petName")
    const [orderBy,setOrderBy]= useState("asc")
    const appoint = appoin.filter(
    item=>{
             return (
                 item.petName.toLowerCase().includes(query.toLowerCase()) ||
                 item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
                 item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
                 );
         }
).sort((a,b) => {
    let order = (orderBy==='asc') ? 1: -1;
    return(
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1*order : 1*order
    )
})
    
    return (
        <div>
            <AddAppiontment 
                onSendAppointment={myAppointmnet=>SetApp([...appoint,myAppointmnet])}
            />
            <Search query={query} queryonchange={myQuery=> setQuery(myQuery)}
            orderBy={orderBy}
            onOrderByChanger={myorder=> setOrderBy(myorder)}
            sortBy={sortBy}
            onSortByChanger={mysort=> setSortBy(mysort)}/>
        <ul className="divide-y divide-gray-200">
            {appoint.map(app => (
                    
                    <li className="px-3 py-3 flex items-start">
                        <button type="button"
                            onClick={()=>{
                                SetApp(appoin.filter(apps=>apps.id!= app.id))
                            }
                            }
                            className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <BiTrash /></button>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <span className="flex-none font-medium text-2xl text-blue-500">{app.petName}</span>
                                <span className="flex-grow text-right">{app.aptDate}</span>
                            </div>
                            <div><b className="font-bold text-blue-500">Owner:</b> {app.ownerName}</div>
                            <div className="leading-tight">{app.aptNotes}</div>
                        </div>
                    </li>
                ))}
        </ul>
        </div>
    );
}

export default AppointmnetList;