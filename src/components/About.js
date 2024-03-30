// import User from "./User"

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

import UserClass from "./UserClass"

class About extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="mt-24 flex flex-col items-center">
                <h1>About Us Page</h1>
                
                <UserClass name={"Gokul (class)"} location="Hyderabad"/>
            </div>
        )
    }
}

export default About