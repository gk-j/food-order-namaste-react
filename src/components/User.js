import {useState} from "react"

const User = (props) =>{
    const [count] = useState(0)
    const [count2] = useState(1)
    return(
        <div className="user-card">
            <h3>count:{count}</h3>
            <h3>count2:{count2}</h3>
            <h2>Name:{props.name}</h2>
            <h2>Location:{props.location}</h2>

        </div>
    )
}

export default User