import {Button} from './Button'
import {optionsHour} from './database'
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import es from 'date-fns/locale/es'
import Select from 'react-select'
import '../styles/datepicker.css'
import marketicons from '../img/marketicons.svg'
import { Navbar } from './Navbar'
import { Cartviewcont } from './Cartviewcont'
import { useCartContext } from '../context/GeneralContext'
import ReactWhatsapp from 'react-whatsapp';



registerLocale('es', es)



export const Cartmarket = () => {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const list = useCartContext()
    const totalPrice = list.reduce((x, y)=> x + y.qty * y.price,0)
    const [fecha, setEstado] = useState(new Date ())
    const messageWhatsapp = <ReactWhatsapp number="57-302-437-9582" message="Hello World!!!" />
    
    return(
<><Navbar/>
        <section className='cartcard'>
            {list.length == 0? <h3>Por ahora no tienes ningun servicio agregado a tu carrito</h3> : <Cartviewcont/>}
        </section>
        <section className="cart">
            <div className="chosen">

            </div>
            <div className='datecont'>
                <h1>¡Escoge la fecha de tu cita!</h1>
                <p>{'('}nos comunicaremos por llamada para confirmarla{')'}</p>
                <DatePicker className='datepicker' selected={fecha} onChange={(date) => setEstado(date)} locale='es' dateFormat='dd - MMMM -yy'  minDate={new Date()} />
                <img src={marketicons} alt="" />
            </div>
            <div className="reserve">
                <div className='reservetotal'>
                    <p>Total</p>
                    <h2>${Intl.NumberFormat('de-DE').format(totalPrice)}</h2>
                </div>
                <ReactWhatsapp className='whatsapp' number="57-302-437-9582" message= {`Hola, quiero realizar una reservación para el dia: ${fecha.toLocaleDateString('es-ES', options)}, para los siguientes servicios: ${list.map(x=>' '+x.name + ', '+ x.qty + ' unidad(es)')}, con un valor total de: $${Intl.NumberFormat('de-DE').format(totalPrice)} `}>
            <input value='Hacer reserva &nbsp;&nbsp; >' className='buybutton' type="button" /> 
            </ReactWhatsapp>
            
            </div>
        </section>
</>
    )
}