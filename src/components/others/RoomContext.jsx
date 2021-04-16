import React,{createContext,useEffect,useState} from 'react';
import Client from '../contentful';

let mySet=new Set([]);//global
let flag=0; //global
let tempRooms,roomType,peopleCapacity,roomPrice,roomSize,roomBreakfast,roomPets; //global

const RoomContext=createContext();
function RoomContextProvider(props) 
{
    const[rooms,setRooms]=useState({    
         allRooms:[],
         sortedRooms:[],
         featuredRooms:[],
         loading:true,
         type:'all',
         capacity:1,
         price:0,
         minPrice:0,
         maxPrice:0,
         size:0,
         breakfast:false,
         pets:false
    });  
    
    
    useEffect(()=>{
        //getData
        let getData=async()=>{
            try{
                const response=await Client.getEntries({
                    content_type:"skyResortApp",
                    order:'fields.price'
                });
                let allRooms=formatData(response.items);
                let featuredRooms=allRooms.filter(myRoom=>myRoom.featured===true);
                let maxPrice=Math.max(...allRooms.map(item=>item.price));
            
                setRooms({
                    allRooms:allRooms,
                    sortedRooms:allRooms,
                    featuredRooms:featuredRooms,
                    loading:false,
                    type:'all',
                    capacity:1,
                    size:0,
                    minPrice:0,
                    price:maxPrice,
                    maxPrice:maxPrice,
                    breakfast:false,
                    pets:false
                });
            }catch(error){
                console.log(error);
            }
        }
        getData();
    },[])
    
    function formatData(items) //function to get the JSON data in developer friendly way 
    {
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>
            image.fields.file.url);
            let room={...item.fields,images,id};
            return room;    
        });
        return tempItems;
    }
    function singleRoomData(slug)
    {
        let tempRooms=rooms.allRooms;
        let room=tempRooms.find((myRoom)=>
            myRoom.slug===slug );

        return room;
    }
    
    function handleChange(event) //event handling function
    {
        
        const target=event.target;
        const value=target.type==='checkbox'?target.checked : target.value; 
        const name=event.target.name;
        
        
        setRooms(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            };
        });
        
        //avoiding the neccessity of callback function by simple passing the current value through argument. :)
        mySet.add(name);
        
        filterRooms(value,name);
        
    }
    
    function handleDelete(index,myArray) //deleting a filter 
    {
        let val=myArray[index];
        mySet.delete(val);
        myArray.splice(index,index);
        flag=1;
        filterRooms(); 
    }
    
    
    function filterRooms(value,name)
    {
        
        let {
            allRooms,
            sortedRooms,
            
        }=rooms
        
        
        if(flag===1) //in case of deleting filter
        {
            
            let fl1=0,fl2=0;
            tempRooms=[...allRooms];
            if(mySet.size!==0)
            {
                for(let item of mySet)
                {
                    //filter by type
                    if(item==="type")
                    {
                        let temp=roomType;
                        if(temp!=='all')
                            tempRooms=tempRooms.filter(tempRoom=>tempRoom.type===temp);
                        
                    }
                    //filter by capacity
                    else if(item==="capacity")
                    {
                        let temp=peopleCapacity;
                        if(temp!==1 && !isNaN(temp)) 
                            tempRooms=tempRooms.filter(tempRoom=>tempRoom.capacity>=temp);
                    }
                    //filter by price
                    else if(item==="price")
                    {
                        let temp=roomPrice;
                        if(temp>=0 && !isNaN(temp))
                            tempRooms=tempRooms.filter(tempRoom=>tempRoom.price<=temp);
                    }
                    //filter by size
                    else if(item==="size")
                    {
                        let temp=roomSize;
                        if(!isNaN(temp))
                            tempRooms=tempRooms.filter(tempRoom=>tempRoom.size===temp);
                    }
                    //filter by breakfast
                    else if(item==="breakfast")
                    {
                        let temp=roomBreakfast;
                        if(temp)
                            tempRooms=tempRooms.filter(tempRoom=>tempRoom.breakfast===true);
                        fl1=1;    
                    }
                    //filter by pets
                    else if(item==="pets")
                    {
                        let temp=roomPets;
                        if(temp)
                            tempRooms=tempRooms.filter(tempRoom=>tempRoom.pets===true)
                        fl2=1;
                    }
                    

                }
                flag=0;
                if(fl1===0)
                    rooms.breakfast=false;
                if(fl2===0)
                    rooms.pets=false;
            }
            else
                window.location.reload();
        }
        else    //normal condition of filtering
        {

            tempRooms=[...sortedRooms];
            if(name==="type")
                roomType=value;
            
            else if(name==="capacity")
            {
                peopleCapacity=value;
                peopleCapacity=parseInt(peopleCapacity);
            }
            else if(name==="price")
            {
                roomPrice=value;
                roomPrice=parseInt(roomPrice);
            }
            else if(name==="size")
            {
                roomSize=value;
                roomSize=parseInt(roomSize);
            }
            else if(name==="breakfast")
                roomBreakfast=value;
                
            else if(name==="pets")    
                roomPets=value;
            
            
            //filter by type
            if(value!=='all' && name==="type")
                tempRooms=tempRooms.filter(tempRoom=>tempRoom.type===value);
            
            //filter by capacity
            if(name==="capacity")
                if(peopleCapacity!==1 && !isNaN(peopleCapacity)) 
                    tempRooms=tempRooms.filter(tempRoom=>tempRoom.capacity>=peopleCapacity);
                    
            
            //filter by price
            if(name==="price")
                if(roomPrice>=0 && !isNaN(roomPrice))
                    tempRooms=tempRooms.filter(tempRoom=>tempRoom.price<=roomPrice); 

            //filter by size
            if(name==="size")
                if(!isNaN(roomSize))
                    tempRooms=tempRooms.filter(tempRoom=>tempRoom.size===roomSize)

            
            //filter by breakfast
            if(name==="breakfast")
                if(value)
                    tempRooms=tempRooms.filter(tempRoom=>tempRoom.breakfast===true);
                    
                
            //filter by pets
            if(name==="pets")
                if(value)
                    tempRooms=tempRooms.filter(tempRoom=>tempRoom.pets===true) 
        }
        
        
        setRooms(prevValue=>{
            return{
                ...prevValue,
                sortedRooms:tempRooms

            };
        });

    }
    
    return(
        <RoomContext.Provider value={{rooms,singleRoomData,handleChange,mySet,handleDelete}}>
            {props.children} 
        </RoomContext.Provider>
    );
}
export {RoomContext};
export default RoomContextProvider;