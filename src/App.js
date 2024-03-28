import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import CartContext from "./utils/CartContext";
import SuccessfullySent from "./components/SuccessfullySent";
import { RecoilRoot } from "recoil";
// import Grocery from "./components/Grocery";

const Grocery =lazy(()=>import("./components/Grocery"))
const About =lazy(()=>import("./components/About"))
const AppLayout = () => {

  const [userName,setUserName]= useState();
  const [cartList,setCartList] = useState([])

  const removeItem = id =>{
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.item.card.info.id  !== id,
    )
    setCartList(updatedCartList)
  }
  
  const decreaseQuantity = item =>{
    
    const productObject = cartList.find(eachCartItem => eachCartItem.item.card.info.id === item.item.card.info.id);
    // console.log(productObject)  
    if(productObject.quantity>1){
        const updatedList = cartList.map((eachCartItem,index)=>{
          if( item.item.card.info.id==eachCartItem.item.card.info.id){
                return {...eachCartItem,quantity:eachCartItem.quantity-1}                                   
            }
          return eachCartItem
        })
        setCartList(updatedList)
      }else{
        removeItem(item.item.card.info.id)
      }
  }

  const clearCart = () =>{
    setCartList([])
  }
  const addCartItem = item =>{
    const productIndex = cartList.findIndex(eachCartItem => eachCartItem.item.card.info.id === item.item.card.info.id);
        if(productIndex!==-1){
            const updatedList = cartList.map((eachCartItem,index)=>{
              if(index==productIndex){
                    return {...eachCartItem,quantity:eachCartItem.quantity+item.quantity}                                   
                }
              return eachCartItem
            })
            setCartList(updatedList); 
        }
        else{
          setCartList(prev=>[...prev,item])
        }  
  }
  
  useEffect(()=>{
    const data = {
      name : "Gokul",
    };
    setUserName(data.name)
  },[])
    return (
      <RecoilRoot>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
      </UserContext.Provider>
      </RecoilRoot>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element : <AppLayout/>,
      children:[
        {
          path:"/",
          element : <Body/>
        },
        {
          path:"/about",
          element:(
            <Suspense fallback={<h1>Loading..</h1>}>
              <About/>
              </Suspense>
              )
        },
        {
          path:"/contact",
          element : <Contactus/>
        },
        {
          path:"/restaurant/:resId",
          element : <RestaurantMenu/>
        },
        {
          path:"/grocery",
          element:(
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery/>
            </Suspense>
            )
        },
        {
          path:"cart",
          element : <Cart/>
        },
        {
          path:"/contact/successful",
          element: <SuccessfullySent/>
        }
      ],
      errorElement : <Error/>  
    },
    
  ])


  const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<AppLayout />);
  root.render(<RouterProvider router={appRouter}/>)
