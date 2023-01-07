import { useState } from 'react'
import { useCartContext, useCartAdd, useCartRemove} from '../context/GeneralContext'//hooks made imported
import '../styles/cartview.css'

const imgroute = require.context('../img/cards/', true) //img route 

export const Cartview = ({name, img =0, cant, price = '$128.900', product}) =>{
    const list = useCartContext() //vars using hooks 
    const add = useCartAdd()
    const remove = useCartRemove()
    const cat = list[product].category //vars to bring the img 
    const pro = list[product].id

    return(
        <div className='cartview'>
            <img src={imgroute(`./${cat}/${pro}.png`)} alt="" />
        <div className='cartviewcenter'>
            <h3>{name}</h3>
            <div className='plus-minus'>
                <button  onClick={()=>{add(list[product]); console.log(list)}}>+</button> {/*Plus, counter and minus elements with functions added with hooks*/}

                <p>{list[product].qty}</p>
                <button onClick={()=>{remove(list[product]);console.log(list)}}>-</button>
            </div> 
        </div>
    <p className='price'>Total: <hr/>${Intl.NumberFormat('de-DE').format(price)}</p> {/*format prices elements added*/}

        </div>
    )  
}