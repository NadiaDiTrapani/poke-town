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
                        <Link to='/viridiancity' className='homepage__links'>viridian city </Link>
                        <Link to="/pewtercity" className='homepage__links'>pewter city</Link>
                        <Link to='/ceruleancity' className='homepage__links'>cerulean city </Link>
                    </ul>
            </div>
        </div>
    );
}

export default HomePage;
