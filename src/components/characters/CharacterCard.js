import React from 'react'

export const CharacterCard = ({item}) => {
    return (
        <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src={item.image} alt="itemimg"></img>
            <div className="card-body">
                <div className="card-inner">
                    <div className="card-front">
                        <h4>{item.name}</h4>
                    </div>
                    <div className="card-back">
                        <ul>
                            <li>Species: {item.species}</li>
                            <li>Gender: {item.gender}</li>
                            <li><a href={item.wiki}>more info</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;