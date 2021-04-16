import React,{useContext} from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomContext} from './RoomContext';
import Loading from './Loading';
function RoomsContainer() {
    const{rooms}=useContext(RoomContext);
    const loading=rooms.loading;
    
    if(loading)
        return <Loading />;
    return (
        <div>
            <RoomFilter />
            <RoomList />
        </div>
    )
}
export default RoomsContainer;