
import { useCartContext } from "../context/GeneralContext";
import { Cartview } from "./Cartview";
import { useState } from "react";


export const Cartviewcont = ()=>{
    const list = useCartContext();
    const [qty, setQty] = useState();
    return(
        <section>{/*map used to make a view component for each product in the cart*/}
            {list.map( x  => 
                    <Cartview name={x.name} price = {x.price*x.qty} product={list.indexOf(x)}/>)}
        </section>
    )
}