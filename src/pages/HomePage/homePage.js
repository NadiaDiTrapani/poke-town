import './homePage.scss';

import { Link } from 'react-router-dom';

function HomePage() {


    return (
        <div className='homepage'>
            <div className='homepage__image-cont' />

            <div>
                <div className='homepage__title-cont'>
                    <p className='homepage__title'>Choose a Kanto town</p>
                </div>

                    <ul className='homepage__link-cont' >
                        <Link to='/pallettown' className='homepage__links'>pallet town</Link>
                        <li className='homepage__links'>viridian city </li>
                        <li className='homepage__links'>pewter city</li>
                        <li className='homepage__links'>cerulean city </li>
                    </ul>
            </div>
        </div>
    );
}

export default HomePage;
