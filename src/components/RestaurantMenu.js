import { useEffect, useState } from "react"
import {Shimmer} from "../components/Shimmer"
import { Link, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import MenuShimmer from "./MenuShimmer";
const RestaurantMenu = () =>{
    const {resId} = useParams()
    const [showIndex,setShowIndex] = useState(0)
    // console.log(resId)

    const resInfo= useRestaurantMenu(resId)
   if(resInfo===null){
    return <MenuShimmer/>
   } 
    console.log(resInfo)
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info 
    const {itemCards}=  resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card?.card
    // console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    const categories= resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    // console.log(itemCards)
    return(
            <div className="text-center">
                <h1 className="font-bold my-8 text-2xl">{name}</h1>
                <h3 className="font-bold text-lg">{cuisines.join(", ")}- {costForTwoMessage}</h3>
                <Link to="/cart">
                    <button className="p-2 rounded text-white bg-blue-500">Go To Cart</button>
                </Link>
                {/** category accordians */}
                {categories.map((eachCategory,index) => 
                    ( //controlled component
                    <RestaurantCategory 
                        key={eachCategory?.card.card.title} 
                        data={eachCategory?.card.card} 
                        showItems={index===showIndex ? true:false}
                        setShowIndex={()=>index===showIndex?setShowIndex(null):setShowIndex(index)}/>
                    )
                )
                }
            </div>
        
    )
}

export default RestaurantMenu