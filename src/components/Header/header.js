import './header.scss'
import logo from '../../assets/images/icons/pika-icon.png';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt='pika logo' className='header__logo'/>
                </NavLink>
            </div>

            <ul className='header__link-cont'>
                <li>
                <NavLink to='/' className='header__link'>Towns</NavLink>
                </li>
                <li>
                <NavLink to='/pokedex' className='header__link'>Pokédex</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;