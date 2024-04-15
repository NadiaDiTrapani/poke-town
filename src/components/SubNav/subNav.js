import './subNav.scss';

function SubNav(){
    return(
        <div className='subnav'>
            <ul className='subnav__cont'>
                <div className='subnav__links--nounderline'>
                    <li className='subnav__links'>pallet town</li>
                    <li className='subnav__links'>viridian city </li>                    
                </div>
                <div className='subnav__links--underline'>
                <li className='subnav__links'>pewter city</li>
                    <li className='subnav__links'>cerulean city </li>
                </div>
            </ul>
        </div>
    )
}

export default SubNav;