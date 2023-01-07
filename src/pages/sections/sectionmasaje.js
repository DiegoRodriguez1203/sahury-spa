import { CardCont } from "../../components/CardCont"
import { Main } from "../../components/Main"
import { cardcorporal} from '../../components/database'



import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


export function Sectionmasaje(){

    return(
        <>

    <Navbar/>
        <Main act={1}/>
        <Routes>
            <Route path='productos/' element = {<Sectionmasaje/>}>
                <Route path='masajes' element = {<Sectionmasaje/>}/>
            </Route>
            <Route path='masajes' element = {<Sectionmasaje/>}/>
        </Routes>
        <CardCont amount = {cardcorporal} category = 'corporal' />
        </>
    )
}


