import '../styles/section.css'
import {section} from './database' // call section array from database

const imgs = require.context('../img/sections', true) // import dinamic img link

let act = '' // declare var act to be used in a ternary operator
export function Section({product, state = false}){ 

    
    state ? act = 'sectionimg active': act='sectionimg' // state is used to know if this section is active, in this case another class is bring to it
    
    return(

        <div className = 'section'>
            <div className={act}> <img src={imgs(`./${section[product].img}.png`)} alt="" /></div> {/* img called*/}
            <p>{section[product].name}</p> {/* name called*/}
        </div>
    )
}