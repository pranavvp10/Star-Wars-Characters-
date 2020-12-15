import CharacterCard from './CharacterCard';
import React from 'react';
import Loader from '../ui/Loader';

export const CharacterList = ({items,isLoading}) => {
    return isLoading?(
        <Loader/>
    ):(<div className="cards">
        {
            items.map((item)=>(
                <CharacterCard key={item.id} item={item}></CharacterCard>
            ))
        }
    </div>)
}

export default CharacterList;
