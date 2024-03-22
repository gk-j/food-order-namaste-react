import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({
    info
  }) => {
    return (
      <div className="m-4 p-4 w-[250px]  bg-gray-100 rounded-lg hover:bg-gray-200">
        <img
        className="rounded-lg"
          src={IMG_CDN_URL+info.cloudinaryImageId}
        />
        <h2 className="font-bold p-1 text-xl">{info.name}</h2>
        <h3>{info.cuisines.join(", ")}</h3>
        <h4>{info.sla.lastMileTravelString} </h4>
        <h5>{info.avgRating}</h5>
      </div>
    );
};

//HigherOrderComponent

//input -RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
      return(
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
  }
}

export default RestaurantCard