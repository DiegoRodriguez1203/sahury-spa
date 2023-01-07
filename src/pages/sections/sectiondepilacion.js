import { CardCont } from "../../components/CardCont"
import { Main } from "../../components/Main"
import { cardfacial, cardcorporal, carddepilacion, cardspa, section } from '../../components/database'
import { Navbar } from "../../components/Navbar"



export function Sectiondepilacion(){

    return(
        <>
        <Navbar/>
        <Main act={3}/>
        <CardCont amount = {carddepilacion} category = 'depilacion'/>
        </>
    )
}