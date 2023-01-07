import '../styles/section.css'
import {section} from './database'

const imgs = require.context('../img/sections', true)

let act = ''
export function Section({product, state = false}){

    
    state ? act = 'sectionimg active': act='sectionimg'
    
    return(

        <div className = 'section'>
            <div className={act}> <img src={imgs(`./${section[product].img}.png`)} alt="" /></div>
            <p>{section[product].name}</p>
        </div>
    )
}