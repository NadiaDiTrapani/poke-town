import './pokeCard.scss'

import pic from '../../assets/images/testEevee.png'

function PokeCard(){
    return(
        <div> 
            <div className='pokecard'>
                <p className='pokecard__id'>123</p>
                <img src={pic} alt='pokemon' className='pokecard__image'/>
                <p className='pokecard__name'>pokemon Name</p>
                <p className='pokecard__type'>pokemon type</p>
            </div>
        </div>
    )
}

export default PokeCard;