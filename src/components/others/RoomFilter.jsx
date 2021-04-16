import React, { useContext,useState } from "react";
import { RoomContext } from "./RoomContext";
import Heading from "./Heading";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import CloseIcon from '@material-ui/icons/Close';

function getUniqueValues(items,value)
{
    //returning a set containing only unique values from the select box option list to avoid recurring of same values in the option list.
    return[...new Set(items.map(item=>item[value]))];
}

function RoomFilter() {
  const roomDetails = useContext(RoomContext);
  
  const{
    handleChange,
    rooms,
    mySet,
    handleDelete
  } = roomDetails;
  
  const{
    allRooms,
    type,
    capacity,
    price,
    size,
    minPrice,
    maxPrice,
    breakfast,
    pets,
  }=rooms;

  let roomTypes=getUniqueValues(allRooms,'type');
  roomTypes=['all',...roomTypes];
  roomTypes=roomTypes.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
  });

  let roomCapacity=getUniqueValues(allRooms,'capacity');
  roomCapacity=roomCapacity.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
  });

  let roomSize=getUniqueValues(allRooms,'size');
  roomSize=roomSize.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  });

 

  let myArray=[];
  const [state, setstate] = useState(myArray);
  for(let item of mySet)
    myArray.push(item);
  
 return (
    <section className="room-filter">
      <Heading name="search rooms" />
      <form className="form-filter">
          
          {/*type*/}
          <div className="form-type">
              <label htmlFor="type">room type</label>
              <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-name"
                    onChange={handleChange}
                >
                   {roomTypes}
                </select>
          </div>  
          
          {/*capacity*/}
          <div className="form-capacity">
              <label htmlFor="capacity">Guests</label>
              <select
                  name="capacity"
                  id="capacity"
                  value={capacity}
                  className="form-capacity"
                  onChange={handleChange}
              >
                  {roomCapacity}
              </select>
          </div>
          
          {/*price*/}
          <div className="form-price">
              <label htmlFor="price">price ${price}</label>
              <input 
                  type="range"
                  name="price" 
                  min={minPrice}
                  max={maxPrice}
                  id="price" 
                  value={price} 
                  className="form-price" 
                  onChange={handleChange}
              />
          </div>
              
          {/*size */}
            <div className="form-size">
              <label htmlFor="size">room size</label>
                    <select
                      name="size"
                      id="size"
                      value={size}
                      onChange={handleChange}
                      className="form-minMaxSize"
                    >
                        {roomSize}
                    </select>
            </div>

          {/*breakfast and pets*/}
          <div className="form-checkbox">
            <div className="form-breakfast-pets">
                <input 
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                />
                <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="form-breakfast-pets">
                <input 
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                />
                <label htmlFor="pets">pets</label>
            </div>    
          </div>
          
      </form>
      <div className="filter-main">
      <div className="filter-label">
            <h2>Filters</h2>
            <div className="filter-div"/>
            <div className="filter-label">
                {myArray.map((item,index)=>{
                    return  <li key={index}>
                                <Zoom in={true}>
                                  <Fab className="filter-btn" onClick={()=>{
                                      setstate(myArray); //in order to re render the label after delete
                                      handleDelete(index,myArray);}
                                  }>
                                      <CloseIcon style={{ fontSize: 15 }}/>
                                  </Fab>
                                </Zoom>
                                {item} 
                            </li>
                })}
            </div>
      </div>
      </div>
    </section>
    
  );
}
export default RoomFilter;
