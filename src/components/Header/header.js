import './header.scss'
import logo from '../../assets/images/icons/pika-icon.png';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <div>
                <NavLink to='/' className='header__logo'>
                    <img src={logo} alt='pika logo' className='header__logo'/>
                </NavLink>
            </div>

            <div>
                <button className='header__btn'>Towns</button>
                <button className='header__btn'>Pokédex</button>
            </div>
        </div>
    )
}

export default Header;