import { useRouteError } from "react-router-dom"



const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            Oop's Something went wrong
            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
}

export default Error