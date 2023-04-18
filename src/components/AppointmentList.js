import React, { useState } from 'react';
import { BiTrash } from "react-icons/bi";
import appointmnetlist from "../data.json"
 const  AppointmnetList =  () => {
     const [appoin,SetApp]=useState([...appointmnetlist]);
    // const DeleteAppoint = (e)=>{
    //     console.log(e);
    //   SetApp(app.filter(apps=>apps.id!=e.id))
    //     console.log(app);
    // }

    return (
        <ul className="divide-y divide-gray-200">
            {appoin.map(app => (
                    
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
    );
}

export default AppointmnetList;