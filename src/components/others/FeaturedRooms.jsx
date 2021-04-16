import React,{useContext} from 'react';
import Heading from './Heading';
import {RoomContext} from './RoomContext';
import Loading from './Loading';
import Room from './Room';
function FeaturedRooms() {
    const {loading,rooms}=useContext(RoomContext);
    let fRooms=rooms.featuredRooms;
    fRooms=fRooms.map(room=>{
        return <Room key={room.id} room={room} />
    });
    return (
        <section className="featured-rooms">
            <Heading name="Featured Rooms"/>
            <div className="featured-rooms-items">
                {loading? <Loading /> : fRooms}
            </div>

            
        </section>
    );
    
}

export default FeaturedRooms;
