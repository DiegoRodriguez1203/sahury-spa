import logo from '../img/logo-sahury.svg'  //import of icons and svg format logo 
import home from '../img/home-icon.svg'
import carticon from '../img/cart-icon.svg'
import { Outlet, Link } from 'react-router-dom' //router dom used to add the routes in the cart and home icons
import '../styles/navbar.css'
import { useCartContext } from '../context/GeneralContext' //cart hook imported


export function Navbar(){
    const cart = useCartContext();

    return(
        <nav className= 'navi'>
            <div className='navlogo' href=""> <img src={logo} alt="" /></div>
            <div className='icons'>
            <Link to = '/'>
                <img src={home} alt="" />
            </Link>
            <Link to = '/micarrito' style={{textDecoration:'none'}}>
                <div className='cart-number'> {/*to show the number of products near the cart */}
                        <img src={carticon} alt="" onClick={()=>{console.log(cart.length)}} />
                    <div className='circle-cart'>
                        <p className='cart-number-products'>{cart.length}</p>
                    </div>
                </div>
            </Link>
            <Outlet/>
            </div>
        </nav>
    )
}