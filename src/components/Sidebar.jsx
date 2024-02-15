import './Sidebar.css'

// IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar=({isOpen, onClose})=> {
    


    return (
    <>
        <div className={`sidebar ${isOpen ?'open' : ''}`}>

            <button className='mt-5 mx-1 flex navtoggler' onClick={onClose}><FontAwesomeIcon icon="fa-solid fa-arrow-right" bounce />
</button>


        </div>
        
        
        
        
        
    </>
    )
}
export default Sidebar;