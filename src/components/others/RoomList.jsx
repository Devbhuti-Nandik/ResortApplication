import React, { useContext } from 'react'
import Room from './Room';
import {RoomContext} from './RoomContext';
function RoomList() {
    const {rooms}=useContext(RoomContext);

    if(rooms.sortedRooms.length===0)
    {
        return(
            <div className="error-message">
                <h3>Unfortunately, no rooms matched your search criteria !!!</h3>
            </div>
        );
    }
    return (
        <section className="room-list">
            <div className="room-listContainer">
                {rooms.sortedRooms.map((item,index)=>{
                    return <Room key={index} room={item}/>
                })}
            </div>
                        
        </section>
    )
}
export default RoomList;
