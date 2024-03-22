import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [resData,setresData]= useState([])
    const [filteredlist,setfilteredList] = useState([])
    const [searchText,setSearchText]=useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(()=>{
            fetchData()
    },[])

    const {loggedInUser,setUserName} = useContext(UserContext)

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setresData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setfilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    const onlineStatus = useOnlineStatus()
    if(onlineStatus===false){
        return(
            <h1>
                Looks like your network connection is lost
            </h1>
        )
    }

    return (
        <div className="mt-16">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input 
                        type="text"
                        className="border border-solid border-black" 
                        value={searchText} 
                        placeholder="enter here"
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                        onClick={()=>{
                        console.log(searchText)
                        const filteredData=resData.filter((res)=>res?.info.name?.toLowerCase().includes(searchText))
                        setfilteredList(filteredData);
                    }}>Search</button> 
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button 
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={()=>{
                            const filteredData=resData.filter((res)=>res.info.avgRating >= 4)
                            console.log("clicked")
                            setfilteredList(filteredData)
                        }}
                    >Top Rated Restaurant</button>
                </div>
                <div className="flex items-center">
                    <label className="mx-2">User Name</label>
                    <input 
                        type="text" 
                        placeholder="enter the name" 
                        className="p-2 border border-solid border-black"
                        value={loggedInUser}
                        onChange={(e)=>setUserName(e.target.value)} />
                </div>

            </div>
            {resData.length===0?<Shimmer/>:<div className="flex flex-wrap">
                {filteredlist?.map((restaurant) => {
                return (<Link  key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                    {restaurant.data?.promoted?<withPromotedLabel {...restaurant} key={restaurant.info.id}/>:<RestaurantCard {...restaurant} key={restaurant.info.id}/>}
                    </Link>)
                })}
            </div>}
            
        </div>    
    );
};

export default Body