import { NavLink } from 'react-router-dom';
import './subNav.scss';

function SubNav(){
    return(
        <div className='subnav'>
            <ul className='subnav__cont'>
                <div className='subnav__links--nounderline'>
                    <NavLink to='/pallettown' className='subnav__links'>pallet town</NavLink>
                    <NavLink to='/viridiancity' className='subnav__links'>viridian city </NavLink>                    
                </div>
                <div className='subnav__links--underline'>
                    <NavLink to='/pewtercity' className='subnav__links'>pewter city</NavLink>
                    <NavLink to='/ceruleancity' className='subnav__links'>cerulean city </NavLink>
                </div>
            </ul>
        </div>
    )
}

export default SubNav;