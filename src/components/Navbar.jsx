import {Link} from 'react-router-dom';
import './Navbar.css'




function Navbar(){

    return(
        <>
        <div className='NavbarContainer'>
            <ul className='NavUl mx-5 Navli'>
            <li className='w-1/3 mx-5'><Link to={'/'}>Home</Link></li>
            <li className='w-1/3 mx-5'><Link to={'/AboutMe'}>About me</Link></li>
            <li className='w-1/3 mx-5'><Link to={'/Stack'}>Stack</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;