export const Shimmer = () =>{
    return( 
        <div className="flex flex-wrap">
            <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
           <ShimmerComponent/>
        </div>
    )
}

function ShimmerComponent(){
    return(
        <div className="bg-gray-100 w-[250px] h-[350px] m-4 p-4 rounded-lg">
                <div className="bg-gray-200 w-[210px] h-[150px]  p-4 rounded-lg"></div>
                <div className="border shadow-md bg-gray-200 w-[100px] h-[10px] rounded-lg p-4 mt-3"></div>
                <div className="border shadow-md bg-gray-200 w-[100px] h-[10px] rounded-lg p-4 mt-3"></div>
                <div className="border shadow-md bg-gray-200 w-[100px] h-[10px] rounded-lg p-4 mt-3"></div>
                <div className="border shadow-md bg-gray-200 w-[100px] h-[10px] rounded-lg p-4 mt-3"></div>
            </div>
    )
}