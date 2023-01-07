import React, {useState, useContext} from "react" // hooks called 

const CartContext = React.createContext();  //Create contexts
const SetCartContext = React.createContext();
const CartAdd = React.createContext();
const CartRemove= React.createContext();

export const useCartContext =()=>{  //Creating hooks to have a better optimized import
  return useContext(CartContext)
}
export const useSetCartContext =()=>{
  return useContext(SetCartContext)
}
export const useCartAdd=()=>{
  return useContext(CartAdd)
}
export const useCartRemove=()=>{
  return useContext(CartRemove)
}

export const GeneralProvider= (props) =>{

const [cartItems, setCartItems] = useState([]) // cart market array

const onAdd = (product) =>{ // function used to add products
const exist = cartItems.find((x) => x.item === product.item);
if(exist){
  const newCartItmes = cartItems.map((x)=>x.item === product.item? {...exist, qty: exist.qty + 1}: x)
  setCartItems(newCartItmes)
} 
else{
  const newCartItmes = [...cartItems,{...product,qty:1}]
    setCartItems(newCartItmes)
}
};
const onRemove = (product) =>{ // function used to remove products
  const exist = cartItems.find((x) => x.item === product.item);
  if (exist.qty === 1){
    const newCartItmes = cartItems.filter((x)=> x.item !== product.item);
    setCartItems(newCartItmes)
  }
  else{
    const newCartItmes = cartItems.map(x=>x.item === product.item? {...exist, qty: exist.qty -1}:x)
    setCartItems(newCartItmes)
  }
}
return(
  <CartContext.Provider value = {cartItems}> {/*Contexts used*/}
    <SetCartContext.Provider value = {setCartItems}>
      <CartAdd.Provider value = {onAdd}>
      <CartRemove.Provider value = {onRemove}>
        {props.children} {/*wraping the childrens elements to use in the app.js document*/}
      </CartRemove.Provider>
      </CartAdd.Provider>
    </SetCartContext.Provider>
  </CartContext.Provider>
);
}
