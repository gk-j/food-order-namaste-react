import { Link } from "react-router-dom";

export default function Contactus(){
    return(
        <div className="mt-24 flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl p-4 m-4">Contact US</h1>
            <form className="flex flex-col items-center">
                <div className="flex flex-col text-center">
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="name" 
                    className="border border-black m-2 p-2 rounded-lg"/>
                </div>
                <div className="flex flex-col text-center">
                    <label>Message</label>
                    <input 
                        type="text" 
                        placeholder="message"
                        className=" border border-black m-2 p-2 rounded-lg"/>
                </div>
               <Link to="/contact/successful">
                    <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">Submit</button>
               </Link>
            </form>
        </div>
    )
}