import {Section} from './Section' //component section, styles and outlet, link propertys called from react router dom import
import '../styles/main.css'
import { Outlet, Link } from 'react-router-dom'


export function Main({act = 1}){ // Main functios used to assign the active section
    let act1 =false
    let act2 =false
    let act3 =false
    let act4 =false

    if(act==1){
        act1 = true}
    else if(act==2){
        act2 = true
    }
    else if(act==3){
        act3 = true
    }
    else if(act==4){
        act4 = true
    }

    return(

       
        <section className='contmain'>
             {/*Link and outlet used for the change section function, using react router dom */}
            <section className="sections">
            {/*using the section component to make the main selector */}
                <Link to='/productos/masajes' className='link'><Section product = {0} state = {act1} /></Link>
                <Link to='/productos/facial' className='link'><Section product = {1} state = {act2}/></Link>
                <Link to='/productos/depilacion' className='link'><Section product = {2} state = {act3}/></Link>
                <Link to='/productos/spa' className='link'><Section product = {3} state = {act4}/></Link>
            </section>
            <section className="products">
                
                </section>
            <Outlet/>
        </section>
    )
}