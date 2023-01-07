import React from 'react'
import '../styles/card.css'  //styles, an icon img and products database imported
import icon from '../img/cards/spa-icon.svg'
import { cardfacial, cardcorporal, carddepilacion, cardspa } from './database'
import { useState} from 'react' //import hook useState
import { useCartContext, useSetCartContext, useCartAdd, useCartRemove} from '../context/GeneralContext'
// import the hooks made before in the GeneralContext document

const img = require.context('../img/cards/', true) //link to img

export let list = cardfacial // declare the list var to be used in the convert function


export let convert = (x) =>{ // changing the value deppending which database is used

    if (x=='facial'){
        list = cardfacial}
    else if (x=='corporal'){
        list = cardcorporal
    }
    else if (x=='depilacion'){
        list = carddepilacion
    }
    else if (x=='spa'){
        list = cardspa
    }
    }

export function Card({category, product = 0}){ //card component
    const cart = useCartContext();
    const setCart = useSetCartContext();
    const add = useCartAdd();
    const remove = useCartRemove(); //declaring vars to hooks

    const [adittion, setAdittion] = useState(0) //state used to change the add cart market button
    const [cont, setCont] = useState(0) //state to make test about add products
    const [active, setActive] = useState(true) //state to know if is active the card to show description, price and add button

    const imgselect = img(`./${category}/${product}.png`)
convert(category) //calling function convert with the category prop

    return (
        <div className="card" style={{backgroundImage:`url(${imgselect})`}}>{/*Calling imgs in the background property, using the var made before*/}

            <div onClick={()=>{
            active? setActive(false): setActive(true)
        }} className={active? "screencard": 'cardpost'}> {/*deppending of the active state change the class to show some info*/}
                
                    <img src={icon} alt="" className={active? "": 'hide'} />
                    <div>
                        <h3 className={active? "": 'hide'}>{list[product].name}</h3>
                        <p className={active? "hide": ''} >{list[product].description}</p>
                        
                    </div>
                    <h2 className={active? "hide": ''} >{'$'+Intl.NumberFormat('de-DE').format(list[product].price)}</h2> {/*price value format to add dots each thousand*/}
                    <div className={active? "hide": ''}></div>
            </div>
            <div className={active? "hide": 'contcont'}>

                    {/*cahanging the add button and add functionality*/}
                    {adittion == 1? <button className='addcartbuttom' onClick={()=>{setCont(cont-1);remove(list[product]); setAdittion(-1)}}>Eliminar servicio</button>: <button className='addcartbuttom' onClick={()=>{setCont(cont+1);add(list[product]); setAdittion(+1)}}>Añadir a carrito</button>}
                        
                        
                    </div>
                    
        </div>
        
        
    )

}