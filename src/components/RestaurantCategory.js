import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    // const [showItems,setShowItems] = useState(false)
    const onHandleClick = () => {
        setShowIndex()
        // setShowItems((prev)=>!prev)
    }
    // console.log(showItems)
    return(
        <div className="bg-gray-100 shadow-lg p-4 w-6/12 mx-auto my-6">
            {/**Header */}
            <div className="flex justify-between cursor-pointer" onClick={onHandleClick}>
                <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
                <span>{showItems?<BiDownArrow/>:<BiUpArrow />}</span>
            </div>
            {/**Accordion Body */}
            {showItems?<ItemList data={data.itemCards}/>:""}
        </div>
    )
}

export default RestaurantCategory