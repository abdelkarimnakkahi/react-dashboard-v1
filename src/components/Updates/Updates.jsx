import React from 'react';
import "./Updates.css";
import {UpdatesData} from "../../Data/Data";

function Updates() {
  return (
    <div className='updates'>
        {UpdatesData.map((update) => {
            return(
                <div className="update">
                    <img src={update.img} alt="profile image" />
                    <div className="notification">
                        <span>{update.name}</span>
                        <span>{update.notification}</span>
                    </div>
                    <span>{update.time}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Updates;