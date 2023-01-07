import { CardCont } from "../../components/CardCont"
import { Main } from "../../components/Main"
import { cardfacial, cardcorporal, carddepilacion, cardspa, section } from '../../components/database'
import { Navbar } from "../../components/Navbar"

export function Sectionspa(){

    return(
        <>
        <Navbar/>
        <Main act={4}/>
        <CardCont amount = {cardspa} category = 'spa'/>
        </>
    )
}