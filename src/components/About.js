// import User from "./User"
// import UserContext from "../utils/UserContext";
// import UserClass from "./UserClass"

// const About = () =>{
//     return(
//         <div>
//             <h1>About us</h1>
//             {/* <User name="Gokul (function)" location="Hyderabad"/> */}
//             <UserClass name={"Gokul (class)"} location="Hyderabad"/>
//         </div>
//     )
// }

// export default About 

import { Component } from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass"

class About extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="mt-24 flex flex-col items-center">
                <h1>About Us Page</h1>
                <UserContext.Consumer>
                    {({loggedInUser})=>(<h1>loggedIn:{loggedInUser}</h1>)}
                </UserContext.Consumer>
                <UserClass name={"Gokul (class)"} location="Hyderabad"/>
            </div>
        )
    }
}

export default About