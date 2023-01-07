import { CardCont } from "../../components/CardCont"
import { Main } from "../../components/Main"
import { cardfacial, cardcorporal, carddepilacion, cardspa, section } from '../../components/database'
import { Navbar } from "../../components/Navbar"

export function Sectionfacial(){

    return(
        <>
        <Navbar/>
        <Main act={2}/>
        <CardCont amount = {cardfacial} category = 'facial'/>
        </>
    )
}