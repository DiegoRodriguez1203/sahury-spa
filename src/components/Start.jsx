import '../styles/start.css'
import icon from '../img/icon-sahury.png'
import logo from '../img/logo-sahury.svg'
import deco1 from '../img/deco1.svg'
import deco2 from '../img/deco2.svg'
import { Button } from './Button'
import { Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom'

export function Start(){
    return (
        
        <section className="start">
            <div className='screenbrown'></div>
            {/*White screen for the background img*/}
            <div className='screen'>
                {/*Linear gradient screen (brown), it has all the start page content */}
                <div className='contscreen'>
                <div className='screenbrown'></div>
                    <div className='conticon'>
                        <img src={icon} alt="" />
                    </div>

                    {/*Greetings*/}
                    <div>
                        <h1>¡Hola!</h1>
                        <p>Hagamos de este, un gran día...</p>
                    </div>

                    {/*Button component*/}
                    <Link to='/productos' className='link'><Button title='comenzar' func='startbutton'></Button></Link>
                    
                    <Outlet/>
                    {/*Logo with side decoration, it be at the end of the start page*/}
                    <div className='logoplants'>
                        <img src={deco1} alt="" />
                        <div className='logosolo'>
                            <img src={logo} alt="" />
                        </div>
                        <img src={deco2} alt="" />
                    </div>

                </div>
            </div>
            
        </section>
    )
}