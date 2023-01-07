import { Card } from "./Card" // importing card component, databases and styles
import { cardfacial, cardcorporal, carddepilacion, cardspa, section } from './database'
import '../styles/cardCont.css'



export function CardCont({amount = cardfacial, category = 'facial',}){
    return(
        <section className="card-father">
            
            <div className="card-cont"> {/*map used to create a card for each product in the database selected, using the category and id to bring the background img*/}
                {amount.map( x  => 
                    <Card className='card' category= {category} product= {x.id}/>)}
            </div>
        
        </section>
        
        
    )
}